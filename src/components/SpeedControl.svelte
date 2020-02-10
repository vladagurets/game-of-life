<script>
  import { lifeSpeed } from 'src/store.js'

  const onSpeedChange = ({ target }) => {
    lifeSpeed.set(parseInt(target.value))
  }
</script>

<style>
  div {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  input {
    width: 250px;
  }
  label {
    opacity: .75;
  }
</style>

<div>
  <label>Life Speed</label>
  <input type='range' bind:value={$lifeSpeed} min='0' max='990' on:change={onSpeedChange}>
</div>