<script>
  import { PATTERNS } from 'src/constants'
  import { gamePattern } from 'src/store.js'

  const changePattern = pattern => () => {
    gamePattern.set(pattern)
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
  <label>Pattern</label>
  <div>
    {#each Object.keys(PATTERNS) as pattern, i}
      <button on:click={changePattern(pattern)} class={pattern === $gamePattern ? 'active' : ''}>
        {pattern}
      </button>
    {/each}
  </div>
</div>