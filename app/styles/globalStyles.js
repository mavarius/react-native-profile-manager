import { StyleSheet } from 'react-native'
import {
  appPrimaryFontColor,
  appSecondaryFontColor,
  appFontHeavy
} from './constants'

export default StyleSheet.create({
  primaryHeader: {
    color: appPrimaryFontColor,
    fontFamily: appFontHeavy,
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 'bold'
  }
})