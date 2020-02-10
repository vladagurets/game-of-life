<script>
  import { BOARD_SIZES } from 'src/constants'
  import { gridSize } from 'src/store.js'

  const changePattern = size => () => {
    gridSize.set(size)
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
  <label>Board Size</label>
  <div>
    {#each BOARD_SIZES as size, i}
      <button on:click={changePattern(size)} class={size === $gridSize ? 'active' : ''}>
        {size} x {size}
      </button>
    {/each}
  </div>
</div>