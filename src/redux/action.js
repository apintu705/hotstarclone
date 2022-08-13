

export const getuseraction=(user)=>async(dispatch)=>{
    console.log(user)
    const userc={
        name:user.displayName,
        email:user.email,
        photo:user.photoURL
    }
    dispatch({type: 'SET_USER',payload:userc})
}

export const getsignout=()=>async(dispatch)=>{
    dispatch({type: 'SIGN_OUT'})
}