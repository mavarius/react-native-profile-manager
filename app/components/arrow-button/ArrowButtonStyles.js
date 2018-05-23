import { StyleSheet } from 'react-native'
import { 
  appSuccessColor,
  appFailColor,
  appPrimaryFontColor,
  unitHeight,
  maxWidth,
  appFontHeavy
} from '../../styles/constants'

export default StyleSheet.create({
  button: {
    height: unitHeight,
    width: maxWidth
  },
  prompt: {
    color: appPrimaryFontColor,
    position: 'absolute',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: appFontHeavy
  }
})