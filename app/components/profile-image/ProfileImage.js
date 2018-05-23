import React from 'react'
import { Image, TouchableOpacity, Text } from 'react-native'

import PlaceholderImage from '../placeholder-image/PlaceholderImage'
import profileImageContainer from '../../containers/profileImageContainer'

import styles from './ProfileImageStyles'


export const ProfileImage = ({ navigate, croppedImage }) => {
  return(
    <TouchableOpacity onPress={() => navigate('ImageSelectScene')} style={styles['profile-image']}>
      { croppedImage ? <Image style={styles['profile-image']} source={{ uri: croppedImage }} /> : <PlaceholderImage /> }
      <Text style={styles['prompt']}>{ croppedImage ? 'Modify Image' : 'Upload New Image' }</Text>
    </TouchableOpacity>
  )
}

export default profileImageContainer(ProfileImage)