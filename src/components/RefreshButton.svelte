<script>
	import { createEventDispatcher } from 'svelte'
  import refreshIconPath from 'public/refresh-icon.svg'

  const dispatch = createEventDispatcher()
  const ALT_TEXT = 'Refresh Game'

  const resetGame = () => {
    dispatch('reset')
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
  button:active, button:focus {
    background-color: transparent;
  }
  button:active {
    transform: rotate(-360deg);
  }
</style>

<button class='btn-text' title={ALT_TEXT} on:click={resetGame}>
  <img src={refreshIconPath} alt={ALT_TEXT} />
</button>