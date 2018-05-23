import React, { Component } from 'react'
import { Image, Animated, Easing } from 'react-native'

import styles from './PlaceholderImageStyles'


export class PlaceholderImage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      bobValue: new Animated.Value(1)
    }
  }

  componentDidMount() {
    this.triggerAnimation()
  }

  triggerAnimation = () => {
    this.state.bobValue.setValue(0.8)
    Animated.sequence([
      Animated.spring(
        this.state.bobValue, {
          toValue: 1,
          friction: 3,
          useNativeDriver: true
        }
      ),
      Animated.timing(
        this.state.bobValue, {
          toValue: 0.8,
          duration: 500,
          delay: 10000,
          useNativeDriver: true
        }
      )
    ]).start(() => {
      this.triggerAnimation()
    })
  }

  render() {
    return(
        <Animated.Image style={{transform: [{scale: this.state.bobValue}]}} source={require('../../img/white_camera.png')} />
    )
  }
}

export default PlaceholderImage