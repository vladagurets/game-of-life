<script>
  import { onMount } from 'svelte'

  import Cell from './components/Cell.svelte'
  import PatternSelector from './components/PatternSelector.svelte'
  import SpeedControl from './components/SpeedControl.svelte'
  import RefreshButton from './components/RefreshButton.svelte'
  import TrashButton from './components/TrashButton.svelte'
  import FigureButtons from './components/FigureButtons.svelte'
  import PauseButton from './components/PauseButton.svelte'

  // TODO:
  // 1) Refactor controlls to select (like in sort-viz)
  // 2) Refactor layout
  // 3) Refactor to canvas

  import {
    gamePattern,
    grid,
    gridSize,
    lifeSpeed,
    cellSize,
    gameStatus
  } from 'src/store.js'

  import { PATTERNS } from 'src/constants'

  import {
    countNearestCells,
    drawFiguresInGrid,
    generateGrid,
    fillGridWithRnd
  } from 'src/gridHelper'

  import { getGridStyle } from 'src/utils'

  let gameTimeout = null
  
  const initGame = () => {
    const newGrid = generateGrid($gridSize)
    fillGridWithRnd(newGrid, Math.round(($gridSize**2) / 7))
    grid.set(newGrid)
    loop()
  }

  const destroyGame = () => {
    clearTimeout(gameTimeout)
    grid.set([])
  }

  const resetGame = () => {
    destroyGame()
    initGame()
  }

  const loop = () => {
    gameTimeout = setTimeout(() => {
      const newGrid = [...$grid]

      $grid.forEach((cell, index) => {
        const neighbours = countNearestCells({
          index,
          grid: $grid,
          gridSize: $gridSize
        })

        newGrid[index] = PATTERNS[$gamePattern](cell, neighbours)
      })
    grid.set(newGrid)
    $gameStatus && loop()
    }, 1000 - $lifeSpeed)
  }

  // Start $gridSize watching
  const unsubscribeGridSize = gridSize.subscribe(nextVal => {
    destroyGame()
    initGame()
  })
  
  // Start $gameStatus watching
  const unsubscribeGameStatus = gameStatus.subscribe(nextVal => {
    if (!nextVal) {
      clearTimeout(gameTimeout)
    } else {
      loop()
    }
	})

  onMount(resetGame)
</script>

<style>
  .root {
    width: 100%;
    display: flex;
  }

  .settings {
    flex: 1;
  }

  .settings {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .settings-content {
    min-width: 250px;
  }

  .grid {
    display: grid;
    justify-self: center;
  }

  @media only screen and (max-width: 600px) {
    .root {
      flex-direction: column;
      align-items: center;
    }

    .grid {
      order: 1;
    }

    .settings {
      margin-top: 50px;
      order: 2;
    }
  }
</style>

<div class='root'>
  <div class="settings">
    <div class="settings-content">
      <div class="form-item">
        <PauseButton />
        <RefreshButton on:reset={resetGame} />
        <TrashButton />
      </div>
      <br />
      <PatternSelector />
      <br />
      <FigureButtons />
      <br />
      <SpeedControl />
    </div>
  </div>
  <div style={getGridStyle($gridSize, $cellSize)} class='grid'>
    {#each $grid as cell, i}
      <Cell cellState={cell} index={i} />
    {/each}
  </div>
  <div class="settings" />
</div>