<script>
	import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  const ALT_TEXT = 'Refresh Game'

  const resetGame = () => {
    dispatch('reset')
  }
</script>

<style>
  button {
    flex: 1;
  }
</style>

<button title={ALT_TEXT} on:click={resetGame}>
  Reset
</button>