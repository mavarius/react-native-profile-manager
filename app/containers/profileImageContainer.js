import { connect } from 'react-redux'
import { setCroppedImage } from '../lib/actions/imageActions'

const mapStateToProps = state => ({
    selectedImage: state.profileImage.selectedImage,
    croppedImage: state.profileImage.croppedImage
})

const mapDispatchToProps = dispatch => ({
    setCroppedImage: imageUri => {dispatch(setCroppedImage(imageUri))}
})

const profileImageContainer = component => {
  return connect(mapStateToProps, mapDispatchToProps)(component)
}

export default profileImageContainer