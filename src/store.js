import { writable } from 'svelte/store'
import { CONWAY_PATTERN } from 'src/constants'


export const gamePattern = writable(CONWAY_PATTERN)
export const grid = writable([])
export const gridSize = writable(50)
export const lifeSpeed = writable(900)
export const cellSize = writable(10)

