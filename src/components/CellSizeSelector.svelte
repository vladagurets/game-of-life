<script>
  import { cellSize } from 'src/store.js'
  import { CELL_SIZES } from 'src/constants'

  const changeSize = size => () => {
    cellSize.set(size)
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
  label {
    opacity: .75;
    margin-bottom: 5px;
  }
</style>

<div class='root'>
  <label>Cell Size</label>
  <div>
    {#each CELL_SIZES as size, i}
      <button on:click={changeSize(size.value)} class={size.value === $cellSize ? 'active' : ''}>
        {size.title}
      </button>
    {/each}
  </div>
</div>