import {movie} from "../disneyPlusMoviesData"

export const getuseraction=(user)=>async(dispatch)=>{
    
    const userc={
        name:user.displayName,
        email:user.email,
        photo:user.photoURL
    }
    dispatch({type: 'SET_USER',payload:userc})
}
export const getaccess=()=>async(dispatch)=>{
    const userc={
        name:"Abhshek kumar",
        email:"apintu705@gmail.com",
        photo:"https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
    }
    dispatch({type: 'SET_USER',payload:userc})
}
export const getsignout=()=>async(dispatch)=>{
    dispatch({type: 'SIGN_OUT'})
}


export const getmovieaction=()=>async(dispatch)=>{
    let recommended=[];
    let newm=[];
    let trending=[];
    let original=[];
    for(let i=0; i<movie.length; i++){
        if(movie[i].type==="recommend"){
            recommended.push(movie[i]);
        }
        else if(movie[i].type==="trending"){
            trending.push(movie[i])
        }else if(movie[i].type==="original"){
            original.push(movie[i])
        }else if(movie[i].type==="new"){
            newm.push(movie[i])
        }
    }
    dispatch({type: 'RECOMMEND',payload:recommended});
    dispatch({type: 'NEW',payload:newm});
    dispatch({type: 'ORIGINAL',payload:original});
    dispatch({type: 'TRENDING',payload:trending});
}
