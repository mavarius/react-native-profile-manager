import imageRecord from '../records/imageRecord'

export function profileImage (state = {...imageRecord}, action) {
  switch (action.type) {
    case 'SET_CROPPED_IMAGE':
      return {...state, croppedImage: action.imageUri}
    default:
      return state
  }
}
