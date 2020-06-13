const SEARCH_INITIAL_STATE = {
    text: '',
}

export default (state = SEARCH_INITIAL_STATE, action) =>{

    const {type, payload} = action
    switch(type){
        case 'SEARCH':
            return{
                ...state,
                text: payload
            }
        case 'SEARCH_CLEAR':
            return{
                ...state,
                text: ''
            }
        default:
            return state
    }
}