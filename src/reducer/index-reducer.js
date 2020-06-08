
import { combineReducers } from 'redux';
import { categoryReducer, categoryOneReducer } from './reducers/categoryReducer';
import { productReducer, productOneReducer } from './reducers/productReducer';

const rootReducer = combineReducers({
    category: categoryReducer,
    categoryOne: categoryOneReducer,
    product: productReducer,
    productOne: productOneReducer
});

export default rootReducer;