<script>
  import { FIGURES } from 'src/constants'
  import { grid, gridSize } from 'src/store.js'
  import { drawFiguresInGrid, fillGridWithRnd } from 'src/gridHelper'

  const drawFigure = figure => () => {
    const newGrid = [...$grid]
    if (figure) {
      grid.set(drawFiguresInGrid({
        grid: newGrid,
        figure,
        gridSize: $gridSize,
      }))
    } else {
      fillGridWithRnd(newGrid, Math.round(($gridSize**2) / 7))
    }
    grid.set(newGrid)
  }
</script>

<style>
  .root {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  button:not(:last-child) {
    margin-right: 10px;
  }
  button:focus {
    background-color: var(--btn-bg-color);
    border-color: var(--btn-border-color);
  }
  button:active {
    background-color: var(--btn-bg-color-active);
    border-color: var(--btn-border-color-active);
  }
  label {
    opacity: .75;
    margin-bottom: 5px;
  }
</style>

<div class='root'>
  <label>Figures</label>
  <div>
    {#each FIGURES as item, i}
      <button on:click={drawFigure(item.figure)}>
        {item.title}
      </button>
    {/each}
  </div>
</div>