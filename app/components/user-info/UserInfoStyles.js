import { StyleSheet } from 'react-native';
import { 
  appSuccessColor,
  appFailColor,
  appPrimaryFontColor,
  unitHeight,
  maxWidth,
  appFontHeavy
} from '../../styles/constants'

export default StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    color: appPrimaryFontColor
  },
  handle: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  }
})