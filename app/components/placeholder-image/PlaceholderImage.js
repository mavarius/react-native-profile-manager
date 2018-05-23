import React, { Component } from 'react'
import { Image, Animated, Easing } from 'react-native'

import { unitHeight } from '../../styles/constants'

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
    this.state.bobValue.setValue(0.9)
    Animated.sequence([
      Animated.spring(
        this.state.bobValue, {
          toValue: 1,
          friction: 3
        }
      ),
      Animated.timing(
        this.state.bobValue, {
          toValue: 0.9,
          duration: 400,
          delay: 7000
        }
      )
    ]).start(() => {
      this.triggerAnimation()
    })
  }

  render() {
    return(
        <Animated.Image style={{marginTop: unitHeight * .3, transform: [{scale: this.state.bobValue}]}} source={require('../../img/white_camera.png')} />
    )
  }
}

export default PlaceholderImage