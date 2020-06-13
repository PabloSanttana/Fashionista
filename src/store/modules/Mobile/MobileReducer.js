const MOBILE_INITIAL_STATE = {
    active: false
}

export default (state = MOBILE_INITIAL_STATE, action) =>{
        const {type} = action

        switch (type) {
            case 'MOBILE_ON':
                return{
                    ...state,
                    active: true
                }
            case 'MOBILE_OFF':
                return{
                    ...state,
                    active: false
                }
            default:
                return state
        }
}