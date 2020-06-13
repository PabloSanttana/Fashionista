const PRODUCTS_INITIAL_STATE = {
    data: [],
}

export default (state = PRODUCTS_INITIAL_STATE, action) =>{
        const {payload, type} = action

        switch (type) {
            case 'PRODUCTS_DATA':
                return{
                    ...state,
                    data: payload
                }
            default:
                return state
        }
}