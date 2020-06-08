import { Types } from '../types/action-types';

export const categoryAddAction = (newCategory) => {
    return {
        type: Types.ADD_CATEGORY_SUCCESS,
        payload: newCategory
    }
}

export const categoryDeleteAction = (item) => {
    return {
        type: Types.DELETE_CATEGORY_SUCCESS,
        payload: item
    }
}

export const categoryUpdateAction = (item) => {
    return {
        type: Types.UPDATE_CATEGORY_SUCCESS,
        payload: item
    }
}

export const categoryGetItemAction = (item) => {
    return {
        type: Types.GET_ONE_CATEGORY_SUCCESS,
        payload: item
    }
}