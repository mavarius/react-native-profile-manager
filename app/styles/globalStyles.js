import { StyleSheet } from 'react-native'
import {
  appPrimaryFontColor,
  appSecondaryFontColor,
  appFontHeavy,
  headerFontSize,
  unitHeight
} from './constants'

export default StyleSheet.create({
  primaryHeader: {
    color: appPrimaryFontColor,
    fontFamily: appFontHeavy,
    textAlign: 'left',
    fontSize: headerFontSize,
    fontWeight: 'bold',
    marginTop: unitHeight * .3
  }
})