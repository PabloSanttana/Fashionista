export const searchText = (text) =>{
    return{
        type:'SEARCH',
        payload: text
    }
}

export const searchClearText = () =>{
    return{
        type: 'SEARCH_CLEAR',
    }
}