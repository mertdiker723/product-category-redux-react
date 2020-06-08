import { Types } from '../../action/types/action-types';

export const categoryReducer = (state = [], action) => {
    if (action) {
        switch (action.type) {
            case Types.ADD_CATEGORY_SUCCESS:
                return [...state, action.payload];
            case Types.DELETE_CATEGORY_SUCCESS:
                return state.filter(item => item.id !== action.payload.id);
            case Types.UPDATE_CATEGORY_SUCCESS:
                return state.map(item => item.id === action.payload.id ? action.payload : item);
            default:
                return state;
        }
    }
}

export const categoryOneReducer = (state = {}, action) => {
    if (action) {
        switch (action.type) {
            case Types.GET_ONE_CATEGORY_SUCCESS:
                return action.payload;
            default:
                return state;
        }
    }
}