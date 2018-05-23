import React, { Component } from 'react'
import { Text, Image, View, ImagePickerIOS, ImageEditor, Button } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'

import profileImageContainer from '../../containers/profileImageContainer'

import sceneStyles from './SceneStyles'
import styles from './ImageSelectSceneStyles'

export class ImageSelectScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null,
      croppedImage: null,
      error: null,
    }
  }

  // componentDidMount() {
  //   this.pickImage()
  // }

  pickImageNew = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({ croppedImage: image })
    })
  }

  pickImage = () => {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ image: imageUri, error: null })
    }, error => {
      this.setState({ error: 'No image selected' })
    })
  }

  crop = () => {
    if (this.state.image) {
      const cropData = {
        offset: { x:0, y:0 },
        size: { width: 200, height: 200 },
        displaySize: { width: 200, height: 200 },
        resizeMode: 'contain'
      }

      ImageEditor.cropImage(this.state.image, cropData, imageUri => {
        this.setState({ croppedImage: imageUri, error: null })
      }, error => {
        this.setState({ error: error })
      })
    } else {
      this.setState({ error: 'Please select an image to crop' })
    }
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
        {this.state.image ? (
          <Image style={styles['imagePreview']} source={{ uri: croppedImage || image }} />
        ) : (
          <Text>{error || 'No Image Selected'}</Text>
        )}
        <Button onPress={this.pickImage} title="select new image" accessibilityLabel="Select a new image" />
        <Button onPress={this.crop} title="crop image" accessibilityLabel="Crop image" />
        <Button onPress={this.save} title="save" disabled={croppedImage === null} accessibilityLabel="Save and return to profile page" />
        <Button onPress={this.cancel} title="cancel" accessibilityLabel="Cancel and return to profile page" />
      </View>
    )
  }
}

export default profileImageContainer(ImageSelectScene)