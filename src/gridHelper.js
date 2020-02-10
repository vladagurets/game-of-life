import { getRandomInt } from 'src/utils';

export const generateGrid = n => {
  const grid = new Array(n**2)
  grid.fill(0)  
  return grid
}

export const countNearestCells = ({ index, grid, gridSize }) => {
  let liveCells = 0
  getCoordinatesForCheck(index, gridSize).forEach(i => {
    if (grid[i] === 1) {
      liveCells++
    }
  })
  return liveCells
}

const getCoordinatesForCheck = (index, gridSize) => [
  index - 1 - gridSize, // x - 1, y - 1
  index - 1 + gridSize, // x - 1, y + 1
  index - 1, // x - 1, y
  index - gridSize + 1, // x + 1, y - 1,
  index - gridSize, // x, y - 1,
  index + 1 + gridSize, // x + 1, y + 1
  index + 1, // x + 1, y
  index + gridSize, // x, y + 1
]

export const drawFiguresInGrid = ({ grid, figure, count = 1, gridSize }) => {
  let _grid = [...grid]
  let _count = 0
  let _figure = [...figure]
  // Get size of figure
  const figureLength = Math.sqrt(_figure.length)
  const needReverse = Math.round(Math.random())

  if (needReverse) {
    _figure = _figure.reverse()
  }

  while (count !== _count) {
    let isCorrectPlace = true
    const rndIndex = getRandomInt(grid.length)

    for (let i = 0; i < figureLength; i++) {
      for (let j = 0; j < figureLength; j++) {
        if (grid[rndIndex + j + i * gridSize] !== 0) {
          isCorrectPlace = false
        }
      }
    }

    if (isCorrectPlace) {
      for (
        let i = rndIndex, k = 0;
        (i < rndIndex + figureLength * gridSize), (k < figureLength**2);
        (i += gridSize), (k += figureLength)
      ) {
        for (let j = 0; j < figureLength; j++) {
          _grid[i + j] = _figure[k + j]
        }
      }
      _count++
    }
  }
  Object.assign(grid, _grid)
}

export const fillGridWithRnd = (grid, cellsCount = 500) => {
  for (let i = 0; i < cellsCount; i++) {
    grid[getRandomInt(grid.length)] = 1
  }
}


export const conwayRule = (cell, neighbours) => {
  if (cell > 0) {
    return neighbours === 2 || neighbours === 3 ? 1 : 0
  } else {
    return neighbours === 3 ? 1 : 0
  }
}

export const mazeRule = (cell, neighbours) => {
  if (cell > 0) {
    return neighbours >= 1 && neighbours <= 5 ? 1 : 0
  } else {
    return neighbours === 3 ? 1 : 0
  }
}

export const replicatorRule = (cell, neighbours) => {
  return neighbours > 0 && neighbours % 2 === 0 ? 1 : 0
}

export const seedsRule = (cell, neighbours) => {
  if (cell > 0) {
    return 0
  } else {
    return neighbours == 2 ? 1 : 0
  }
}

export const twoXtwoRule = (cell, neighbours) => {
  if (cell > 0) {
    return neighbours === 1 || neighbours === 2 || neighbours === 5 ? 1 : 0
  } else {
    return neighbours === 3 || neighbours === 6 ? 1 : 0
  }
}

export const dayNightRule = (cell, neighbours) => {
  if (cell > 0) {
    return neighbours === 3 || neighbours === 4 || neighbours === 6 || neighbours === 7 || neighbours === 8 ? 1 : 0
  } else {
    return neighbours === 3 || neighbours === 6 || neighbours === 7 || neighbours === 8 ? 1 : 0
  }
}
