import React from 'react'
import { View } from 'react-native'

import ProfileImage from '../profile-image/ProfileImage'
import UserInfo from '../user-info/UserInfo'
import PeekDrawer from '../peek-drawer/PeekDrawer'

import styles from './SceneStyles'

export const ProfileScene = ({ navigation: { navigate } }) => {
  return(
    <View style={styles['container']}>
      <ProfileImage navigate={navigate} />
      <UserInfo />
      <PeekDrawer />
    </View>
  )
}

export default ProfileScene