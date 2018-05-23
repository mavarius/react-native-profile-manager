import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import Svg, { Polygon } from 'react-native-svg'

import PlaceholderImage from '../placeholder-image/PlaceholderImage'
import profileImageContainer from '../../containers/profileImageContainer'

import styles from './ProfileImageStyles'
import { unitHeight, appPrimaryColor, maxHeight, maxWidth } from '../../styles/constants'


export const ProfileImage = ({ navigate, croppedImage }) => {
  return(
    <View style={styles['image-section']}>
      <TouchableOpacity onPress={() => navigate('ImageSelectScene')} style={styles['profile-button']}>
        { croppedImage ? <Image style={styles['profile-image']} source={{ uri: croppedImage }} /> : <PlaceholderImage /> }
        { croppedImage ? null : <Text style={styles['prompt']}>Add New Image</Text> }
      </TouchableOpacity>
      <Svg style={{position: 'absolute', bottom: 0}} width={maxWidth} height={unitHeight * .7}>
        <Polygon
          points={`
            0,${unitHeight * .7} 
            0,${unitHeight * .7}  
            ${maxWidth},${unitHeight * .4} 
            ${maxWidth},${unitHeight * .7} 
          `}
          fill={appPrimaryColor}
        />
      </Svg>
      <Svg style={{position: 'absolute'}} width={maxWidth} height={unitHeight * .7}>
            <Polygon
              points={`
                0,${unitHeight * .7} 
                0,0 
                ${maxWidth},0 
                ${maxWidth},${unitHeight * .4}
              `}
              fill={appPrimaryColor}
            />
          </Svg>
    </View>
  )
}

export default profileImageContainer(ProfileImage)