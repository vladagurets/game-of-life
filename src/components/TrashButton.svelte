<script>
  import { grid, gridSize } from 'src/store.js'
  import { generateGrid } from 'src/gridHelper'

  const ALT_TEXT = 'Clear grid'

  const clearGrid = () => {
    grid.set(generateGrid($gridSize))
  }
</script>

<style>
  button {
    flex: 1;
  }
</style>

<button class='btn-text'  title={ALT_TEXT} on:click={clearGrid}>
  Clear
</button>