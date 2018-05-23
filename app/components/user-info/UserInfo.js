import React from 'react'
import { Text, View } from 'react-native'

import styles from './UserInfoStyles'
import globalStyles from '../../styles/globalStyles'

export const UserInfo = ({ showNext }) => {
  return(
    <View style={styles['userInfo']}>
      <Text style={globalStyles['primaryHeader']}>
        { showNext ? 'Looks like we\'ve got a rockstar over here!' : 'Let\'s get your profile started with a photo...' }
      </Text>
    </View>
  )
}

export default UserInfo