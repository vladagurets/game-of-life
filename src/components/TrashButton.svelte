<script>
  import { grid, gridSize } from 'src/store.js'
  import trashIconPath from 'public/trash-icon.svg'
  import { generateGrid } from 'src/gridHelper'

  const ALT_TEXT = 'Clear grid'

  const clearGrid = () => {
    grid.set(generateGrid($gridSize))
  }
</script>

<style>
  button {
    padding: 0;
    border: 0;
    margin: 0 auto;
    display: block;
    transition: all .5s;
  }
  img {
    width: 24px;
    height: 24px;
  }
  button:active, button:focus {
    background-color: transparent;
  }
  button:active {
    transform: scale(1.3);
  }
</style>

<button class='btn-text'  title={ALT_TEXT} on:click={clearGrid}>
  <img src={trashIconPath} alt={ALT_TEXT} />
</button>