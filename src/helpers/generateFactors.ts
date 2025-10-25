const getRandomInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateFactors = (
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
  quantity: number
): [number, number][] => {
  
  const factors: [number, number][] = [];

  while (factors.length < quantity) {
    const x = getRandomInRange(xMin, xMax);
    const y = getRandomInRange(yMin, yMax);

    const lastCoordinate = factors[factors.length - 1];

    if (
      !lastCoordinate ||
      ((lastCoordinate[0] !== x || lastCoordinate[1] !== y) &&
        (lastCoordinate[0] !== y || lastCoordinate[1] !== x))
    ) {
      factors.push([x, y]);
    }
  }

  return factors;
};

export default generateFactors