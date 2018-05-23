export const SET_ERROR = 'SET_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export const setError = error => {
  action: SET_ERROR,
  error
}

export const clearError = () => {
  action: CLEAR_ERROR,
  clearState: null
}