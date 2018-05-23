export const SELECT_IMAGE = 'SELECT_IMAGE'
export const CROP_IMAGE = 'CROP_IMAGE'
export const SET_CROPPED_IMAGE = 'SET_CROPPED_IMAGE'

export const selectImage = imageUri => ({
  type: SELECT_IMAGE,
  imageUri
})

export const cropImage = cropData => ({
  type: CROP_IMAGE,
  payload: {
    imageUri,
    cropData
  }
})

export const setCroppedImage = imageUri => ({
  type: SET_CROPPED_IMAGE,
  imageUri
})