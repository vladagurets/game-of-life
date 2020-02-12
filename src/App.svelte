<script>
  import { onMount } from 'svelte'

  import Cell from './components/Cell.svelte'
  import PatternSelector from './components/PatternSelector.svelte'
  import SpeedControl from './components/SpeedControl.svelte'
  import CellSizeSelector from './components/CellSizeSelector.svelte'
  import BoardSizeSelector from './components/BoardSizeSelector.svelte'
  import RefreshButton from './components/RefreshButton.svelte'
  import TrashButton from './components/TrashButton.svelte'
  import FigureButtons from './components/FigureButtons.svelte'
  import PauseButton from './components/PauseButton.svelte'

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
    display: grid;
    grid-template-columns: auto auto auto;
  }
  .left-settings, .right-settings {
    align-self: center;
  }
  .left-settings {
    padding-left: 30px;
  }
  .right-settings {
    padding-right: 30px;
  }
  .grid {
    display: grid;
    justify-self: center;
  }
  .buttons {
    display: flex;
    width: 100px;
    margin: 0 auto;
  }
</style>

<div class='root'>
  <div class="left-settings">
    <PatternSelector />
    <br />
    <FigureButtons />
  </div>
  <div style={getGridStyle($gridSize, $cellSize)} class='grid'>
    {#each $grid as cell, i}
      <Cell cellState={cell} index={i} />
    {/each}
  </div>
  <div class="right-settings">
    <div class="buttons">
      <PauseButton />
      <RefreshButton on:reset={resetGame} />
      <TrashButton />
    </div>
    <br />
    <SpeedControl />
    <br />
    <CellSizeSelector />
    <br />
    <BoardSizeSelector />
  </div>
</div>