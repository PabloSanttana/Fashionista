export const addProduct = (data) =>{
    return{
        type: 'ADD_PRODUCT',
        payload: data
    }
}

export const updateAmountSucces = (data) =>{
    return{
        type: 'UPDATE_PRODUCT',
        payload: data
    }
}

export const removeProduct = (size) =>{
    return{
        type: 'REMOVE_PRODUCT',
        payload:size
    }
}

export const clearCart= () =>{
    return{
        type: 'CART_CLEAR',
    }
}
