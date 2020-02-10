<script>
  import Cell from './Cell.svelte'
  import { DEFAULT_CELL_SIZE } from 'src/constants';
  import { cellSize, gridSize } from 'src/store.js'
  import c from 'classnames'

  export let cellState
  export let index
  
  const getClasses = state => c({
    'filled': state,
    'empty': !state
  })

  $: classes = getClasses(cellState)
</script>

<style>
  div {
    border-radius: 50%;
    border: 1px solid #796c6c;
    box-sizing: border-box;
  }

  .filled {
    background-color: #796c6c;
  }

  .empty {
    opacity: .3;
  }
</style>

<div style={`width: ${$cellSize}px; height: ${$cellSize}px;`} class={classes}/>