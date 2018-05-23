import React, { Component } from 'react'
import { Text, Image, View, ImagePickerIOS, ImageEditor, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'

import PeekDrawer from '../peek-drawer/PeekDrawer'
import ArrowButton from '../arrow-button/ArrowButton'
import profileImageContainer from '../../containers/profileImageContainer'

import sceneStyles from './SceneStyles'
import styles from './ImageSelectSceneStyles'
import { maxHeight, maxWidth } from '../../styles/constants'

export class ImageSelectScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      croppedImage: null,
      error: null,
    }
  }

  componentDidMount() {
    this.pickImage()
  }

  pickImage = () => {
    ImagePicker.openPicker({
      width: maxWidth,
      height: maxHeight / 2,
      cropping: true
    }).then(image => {
      this.setState({ croppedImage: image.path })
    }).catch(e => {
      this.setState({ error: 'No image selected' })
      this.cancel()
    })
  }

  save = () => {
    this.state.croppedImage && this.props.setCroppedImage(this.state.croppedImage)
    this.props.navigation.goBack()
  }

  cancel = () => {
    this.props.navigation.goBack()
  }

  render() {
    const { image, croppedImage, error } = this.state
    return(
      <View style={sceneStyles['container']}>
        {this.state.croppedImage ? (
          <Image style={styles['imagePreview']} source={{ uri: croppedImage }} />
        ) : (
          <Text style={styles['prompt']}>{error || 'No Image Selected'}</Text>
        )}
        <View style={styles['controls']}>
          <TouchableOpacity onPress={this.pickImage}><Text style={styles['prompt']}>select new image</Text></TouchableOpacity>
          <TouchableOpacity onPress={this.cancel}><Text style={styles['prompt']}>cancel</Text></TouchableOpacity>
        </View>
        { croppedImage && <PeekDrawer><ArrowButton onPress={this.save} /></PeekDrawer> }
      </View>
    )
  }
}

export default profileImageContainer(ImageSelectScene)