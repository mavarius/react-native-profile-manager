import { createStore } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'

import reducer from './reducers'

const store = createStore(
  reducer,
  devToolsEnhancer()
)

export default store
