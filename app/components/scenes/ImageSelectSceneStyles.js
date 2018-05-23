import { StyleSheet } from 'react-native'
import { maxWidth, unitHeight, maxHeight, contentWidth, appPrimaryFontColor, appFontHeavy } from '../../styles/constants'

export default StyleSheet.create({
  imagePreview: {
    width: maxWidth,
    height: maxHeight / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  controls: {
    width: contentWidth,
    flexGrow: 1,
    marginTop: unitHeight * .3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  prompt: {
    color: appPrimaryFontColor,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: appFontHeavy
  }
})