<script>
  import { gameStatus } from 'src/store.js'
  import pauseIconPath from 'public/pause-icon.svg'
  import playIconPath from 'public/play-icon.svg'

  const PAUSE_ALT_TEXT = 'Pause game'
  const CONTINUE_ALT_TEXT = 'Continue game'

  const toggleGameStatus = () => {
    gameStatus.set($gameStatus ? 0 : 1)
  }
</script>

<style>
  button {
    padding: 0;
    border: 0;
    opacity: .75;
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

<button title={$gameStatus ? PAUSE_ALT_TEXT : CONTINUE_ALT_TEXT} on:click={toggleGameStatus}>
  <img src={$gameStatus ? pauseIconPath : playIconPath} alt={$gameStatus ? PAUSE_ALT_TEXT : CONTINUE_ALT_TEXT} />
</button>