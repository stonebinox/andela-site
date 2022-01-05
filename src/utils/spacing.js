import { pixelToRem } from "./pixel-to-rem"

const BASE_SPACING_PIXELS = 16

export const DOUBLE_BASE_SPACING = pixelToRem(BASE_SPACING_PIXELS * 2)
export const BASE_SPACING_AND_HALF = pixelToRem(BASE_SPACING_PIXELS * 1.5)
export const BASE_SPACING = pixelToRem(BASE_SPACING_PIXELS)
export const HALF_BASE_SPACING = pixelToRem(BASE_SPACING_PIXELS / 2)
export const QUARTER_BASE_SPACING = pixelToRem(BASE_SPACING_PIXELS / 4)

export const customSpacing = pixelToRem
