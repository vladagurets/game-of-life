export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

export const getGridWidth = (gridSize, cellSize) => (cellSize * gridSize) + (gridSize - 1)

export const getGridStyle = (gridSize, cellSize) => {
  return `
  grid-gap: 1px;
  grid-template-columns: ${'1fr '.repeat(gridSize)};
  height: ${getGridWidth(gridSize, cellSize)}px;
  width: ${getGridWidth(gridSize, cellSize)}px;
`
}