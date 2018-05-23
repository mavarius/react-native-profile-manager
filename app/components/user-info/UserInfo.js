import React from 'react'
import { Text, View } from 'react-native'

import styles from './UserInfoStyles'
import globalStyles from '../../styles/globalStyles'

export const UserInfo = () => {
  return(
    <View>
      <Text style={globalStyles['primaryHeader']}>
        Bruce Wayne
      </Text>
      <Text style={styles['handle']}>
        @totallynotbatman
      </Text>
    </View>
  )
}

export default UserInfo