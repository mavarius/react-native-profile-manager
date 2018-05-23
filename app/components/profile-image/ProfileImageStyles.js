import { StyleSheet } from 'react-native'
import {
  appPrimaryColor,
  appSecondaryColor,
  appPrimaryFontColor,
  appSecondaryFontColor,
  maxHeight,
  maxWidth,
  appFontLight
} from '../../styles/constants'

export default StyleSheet.create({
  'image-section': {
    height: maxHeight / 2,
    width: maxWidth,
    backgroundColor: appSecondaryColor
  },
  'profile-button': {
    alignItems: 'center',
    justifyContent: 'center',
    height: maxHeight / 2,
    width: maxWidth
  },
  'profile-image': {
    height: maxHeight / 2,
    width: maxWidth
  },
  'prompt': {
    fontFamily: appFontLight,
    color: appPrimaryFontColor,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  }
})