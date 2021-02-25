<script>
  import { lifeSpeed } from 'src/store.js'

  const onSpeedChange = ({ target }) => {
    lifeSpeed.set(parseInt(target.value))
  }
</script>


<div class='form-item'>
  <label>Speed</label>
  <input type='range' bind:value={$lifeSpeed} min='0' max='990' on:change={onSpeedChange}>
</div>