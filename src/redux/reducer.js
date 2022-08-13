
export const userreducer=(state={
    
},action)=>{
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }

        case "SIGN_OUT":
            return {
                ...state,
                user:null
            }    
        default:return {...state}
    }
}

export const moviereducer=(state={},action)=>{
    
    switch(action.type){
        
        case "RECOMMEND":
            return {
                ...state,
                recommend: action.payload
            }
            case "NEW":
                return {
                    ...state,
                    new: action.payload
                }
            case "TRENDING":
                return {
                    ...state,
                    trending: action.payload
                }
            case "ORIGINAL":
                return {
                    ...state,
                    original: action.payload
                }
        default:return {...state}
    }
}