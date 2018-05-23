import { StyleSheet } from 'react-native';
import {
  appSecondaryFontColor,
  appFontLight,
  maxHeight,
  contentWidth
} from '../../styles/constants'

export default StyleSheet.create({
  userInfo: {
    flexGrow: 1,
    width: contentWidth,
  },
  handle: {
    fontFamily: appFontLight,
    textAlign: 'left',
    color: appSecondaryFontColor,
    marginBottom: 5,
  }
})