<script>
  import { PATTERNS } from 'src/constants'
  import { gamePattern } from 'src/store.js'

  function onChange ({ target: { value }}) {
    gamePattern.set(value)
  }
</script>

<div class="form-item">
  <label>Pattern</label>
  <select name='pattern' on:change={onChange}>
    {#each Object.keys(PATTERNS) as pattern, i}
    <option value={pattern}>
      {pattern}
    </option>
    {/each}
  </select>
</div>