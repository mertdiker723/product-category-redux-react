import { Types } from '../../action/types/action-types';

export const productReducer = (state = [], action) => {

    if (action) {
        switch (action.type) {
            case Types.ADD_PRODUCT_SUCCESS:
                return [...state, action.payload];
            case Types.DELETE_PRODUCT_SUCCESS:
                return state.filter(item => item.id !== action.payload.id);
            case Types.UPDATE_PRODUCT_SUCCESS:
                return state.map(item => item.id === action.payload.id ? action.payload : item);
            default:
                return state;
        }
    }
}

export const productOneReducer = (state = {}, action) => {
    if (action) {
        switch (action.type) {
            case Types.GET_ONE_PRODUCT_SUCCESS:
                return action.payload;
            default:
                return state;
        }
    }
}