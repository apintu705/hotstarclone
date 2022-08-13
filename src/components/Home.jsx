import React from 'react'
import {useNavigate} from "react-router-dom"
import styled from "styled-components"
import ImgSlider from './Imageslider';
import Recommends from './Recommends';
import Viewers from './Viewers';
import {useDispatch,useSelector} from "react-redux"
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import {getmovieaction} from "../redux/action"


export const Home = () => {
    const {user}=useSelector((state)=>state.user);
    const navigate=useNavigate()
        
    const dispatch = useDispatch()
    
    useEffect(()=>{
        if(!user){
            navigate("/")
        }
        dispatch(getmovieaction())
    },[user,navigate,dispatch])


  return (
    <Container>
        <ImgSlider/>
        <Viewers/>
        <Recommends/>
        <NewDisney/>
        <Originals/>
        <Trending/>
    </Container>
  )
}



const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;