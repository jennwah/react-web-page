import { combineReducers } from 'redux';
import { ProductReducers } from './product';

const rootReducer = combineReducers({
  product: ProductReducers,
})

export default rootReducer;