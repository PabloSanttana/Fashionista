import produce from 'immer'

export default function cart(state = [], action){
        const {type, payload} = action
    switch(type){

        case 'ADD_PRODUCT':
            return produce(state, draft =>{
                draft.push(payload)
            })

        case 'UPDATE_PRODUCT':
            return produce(state, draft =>{

                if(payload.id >= 0){
                    draft[payload.id].amount = payload.amount
                }
               
            })

        case 'REMOVE_PRODUCT':
            return produce(state, draft =>{
                const Index = draft.findIndex(item => item.size ===  payload)

                if( Index >= 0){
                    draft.splice(Index, 1)
                }else{

                }
               
            })

        case 'CART_CLEAR':
            return state =[]

        default:
            return state
    }
}