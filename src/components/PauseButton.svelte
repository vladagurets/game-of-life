<script>
  import { gameStatus } from 'src/store.js'

  const PAUSE_ALT_TEXT = 'Pause game'
  const CONTINUE_ALT_TEXT = 'Continue game'

  function toggleGameStatus () {
    gameStatus.set($gameStatus ? 0 : 1)
  }
</script>

<style>
  button {
    flex: 1;
  }
</style>

<button title={$gameStatus ? PAUSE_ALT_TEXT : CONTINUE_ALT_TEXT} on:click={toggleGameStatus}>
  {$gameStatus ? 'Pause' : 'Play'}
</button>