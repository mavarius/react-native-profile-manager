import { Dimensions } from 'react-native'
import { Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

// DIMENSIONS
export const maxWidth = width
export const maxHeight = height
export const appMargin = maxWidth * .025
export const appWidth = maxWidth - (appMargin * 2)
export const unitHeight = 70

// COLORS
export const appPrimaryColor = '#815eef'
export const appSecondaryColor = '#b5a4ff'
export const appSuccessColor = '#4eea60'
export const appFailColor = '#e84f4f'
export const appBlackColor = '#212121'
export const appPrimaryFontColor = '#FFFFFF'
export const appSecondaryFontColor = '#212121'

// FONTS
export const appFontHeavy = Platform.select({
  ios: 'AvenirNextCondensed-Heavy',
  android: 'sans-serif-condensed'
})
