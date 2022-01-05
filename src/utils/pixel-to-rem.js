const convertStringToNumber = val => parseInt(val, 10)
const normaliseToNumber = value =>
  typeof value === "string" ? convertStringToNumber(value) : value

export const pixelToRem = sizeInPixels => {
  const size = normaliseToNumber(sizeInPixels)

  return `${size / 16}rem`
}
