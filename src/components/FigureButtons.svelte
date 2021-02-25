<script>
  import { FIGURES } from 'src/constants'
  import { grid, gridSize } from 'src/store.js'
  import { drawFiguresInGrid, fillGridWithRnd } from 'src/gridHelper'

  let selectedFigureIndex = 0

  function drawFigure () {
    const newGrid = [...$grid]
    const figure = FIGURES[selectedFigureIndex].figure
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

  function onFigureChange ({ target: { value }}) {
    selectedFigureIndex = value
  }
</script>

<div class="form-item">
  <label>Creature</label>
  <select name='pattern' value={selectedFigureIndex} on:change={onFigureChange}>
    {#each FIGURES as item, i}
    <option value={i}>
      {item.title}
    </option>
    {/each}
  </select>
  <button on:click={drawFigure}>
    add
  </button>
</div>