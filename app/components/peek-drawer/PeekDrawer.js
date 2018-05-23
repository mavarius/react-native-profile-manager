import React, { Component } from 'react'
import { View, Animated, Easing } from 'react-native'
import Svg, { Polygon } from 'react-native-svg'

import styles from './PeekDrawerStyles'
import { maxWidth, unitHeight, appBlackColor, appPrimaryColor } from '../../styles/constants'

export class PeekDrawer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      animValue: new Animated.Value(0)
    }
  }

  componentDidMount() {
    this.triggerAnimation()
  }

  triggerAnimation = () => {
    this.state.animValue.setValue(0)
    Animated.sequence([
      Animated.timing(
        this.state.animValue, {
          toValue: 1,
          duration: 400,
          delay: 1000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true
        }
      )
    ]).start()
  }

  render() {
    return(
      <Animated.View style={{transform: [
        {translateY: this.state.animValue.interpolate({
          inputRange: [0, 1],
          outputRange: [unitHeight, 0]
        })}
      ]}}>
        <View style={styles['peekSection']}>
          {this.props.children}
          <Svg style={{position: 'absolute'}} width={maxWidth} height={unitHeight * .3}>
            <Polygon
              points={`
                0,${unitHeight * .3} 
                0,0 
                ${maxWidth},0 
                ${maxWidth},2
              `}
              fill={appPrimaryColor}
            />
          </Svg>
        </View>
      </Animated.View>
    )
  }
}

export default PeekDrawer