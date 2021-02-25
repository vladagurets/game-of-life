import { writable } from 'svelte/store'
import { CONWAY_PATTERN } from 'src/constants'


const DEFAULT_GRID_SIZE = 50
const DEFAULT_CELL_SIZE = Math.round(
  ((window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth) / DEFAULT_GRID_SIZE) * 0.7
)

export const gamePattern = writable(CONWAY_PATTERN)
export const grid = writable([])
export const gridSize = writable(DEFAULT_GRID_SIZE)
export const lifeSpeed = writable(900)
export const cellSize = writable(DEFAULT_CELL_SIZE)
export const gameStatus = writable(1)

