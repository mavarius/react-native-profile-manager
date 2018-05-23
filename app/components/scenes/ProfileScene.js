import React from 'react'
import { View } from 'react-native'

import ProfileImage from '../profile-image/ProfileImage'
import UserInfo from '../user-info/UserInfo'
import PeekDrawer from '../peek-drawer/PeekDrawer'
import profileImageContainer from '../../containers/profileImageContainer'

import styles from './SceneStyles'

export const ProfileScene = ({ croppedImage, navigation: { navigate } }) => {
  return(
    <View style={styles['container']}>
      <ProfileImage navigate={navigate} />
      <UserInfo showNext={!!croppedImage} />
      { croppedImage && <PeekDrawer /> }
    </View>
  )
}

export default profileImageContainer(ProfileScene)