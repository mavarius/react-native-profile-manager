import { StyleSheet } from 'react-native'
import { maxWidth, maxHeight } from '../../styles/constants'

export default StyleSheet.create({
  imagePreview: {
    width: maxWidth,
    height: maxHeight / 3,
    justifyContent: 'center',
    alignItems: 'center'
  }
})