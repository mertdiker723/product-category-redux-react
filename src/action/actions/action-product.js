import { Types } from '../types/action-types'

export const productAddAction = (newProduct) => {
    return {
        type: Types.ADD_PRODUCT_SUCCESS,
        payload: newProduct
    }
}

export const productDeleteAction = (item) => {
    return {
        type: Types.DELETE_PRODUCT_SUCCESS,
        payload: item
    }
}

export const productUpdateAction = (item) => {
    return {
        type: Types.UPDATE_PRODUCT_SUCCESS,
        payload: item
    }
}

export const productGetItemAction = (item) => {
    return {
        type: Types.GET_ONE_PRODUCT_SUCCESS,
        payload: item
    }
}