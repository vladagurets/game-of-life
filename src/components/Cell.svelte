<script>
  import Cell from './Cell.svelte'
  import { DEFAULT_CELL_SIZE } from 'src/constants';
  import { cellSize, gridSize, grid, gameStatus } from 'src/store.js'
  import c from 'classnames'

  export let cellState
  export let index


  const toggleCellState = () => {
    if (!$gameStatus) {
      $grid[index] = cellState ? 0 : 1
    }
  }

  $: classes = c({
    'filled': cellState,
    'empty': !cellState,
    'pointer': !$gameStatus
  })

</script>

<style>
  div {
    border-radius: 50%;
    border: 1px solid #796c6c;
    box-sizing: border-box;
  }

  .filled {
    background-color: #FBFBF2;
    opacity: .8;
  }

  .empty {
    opacity: .3;
  }

  .pointer {
    cursor: pointer;
  }
</style>

<div
  style={`width: ${$cellSize}px; height: ${$cellSize}px;`}
  class={classes}
  on:click={toggleCellState}
/>