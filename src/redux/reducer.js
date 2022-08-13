
export const userreducer=(state={
    user:null
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