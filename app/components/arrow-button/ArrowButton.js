import React, { Component } from 'react'
import { Animated, Easing, TouchableOpacity, Text } from 'react-native'
import Svg, { Polygon } from 'react-native-svg'

import styles from './ArrowButtonStyles'
import { maxWidth, unitHeight, appSuccessColor } from '../../styles/constants'

export class ArrowButton extends Component {
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
          duration: 300,
          delay: 1500,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true
        }
      )
    ]).start()
  }

  handleClick = () => {
    console.log('On to the next one')
  }

  render() {
    return(
      <TouchableOpacity onPress={this.props.onPress || this.handleClick} style={styles['button']}>
        <Animated.View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          transform: [
            {translateX: this.state.animValue.interpolate({
              inputRange: [0, 1],
              outputRange: [-maxWidth * .9, 0]
            })}
          ]
        }}>
          <Svg width={maxWidth} height={unitHeight}>
            <Polygon
              points={`
                0,${unitHeight} 
                0,0 
                ${maxWidth * .8},0 
                ${maxWidth * .9},${unitHeight * .5} 
                ${maxWidth * .8},${unitHeight}
              `}
              fill={appSuccessColor}
            />
          </Svg>
          <Text style={styles['prompt']}>NEXT STEP</Text>
        </Animated.View>
      </TouchableOpacity>
    )
  }
}

export default ArrowButton