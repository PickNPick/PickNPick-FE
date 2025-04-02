import { useState } from "react"
import styled from "styled-components"
import { theme } from "../styles/themes";


const Mainpage = ()=>{
    const [categorybtn,setcategorybtn] = useState([1,0,0]);

    const btnclick = (i)=>{
        if(i == 0)setcategorybtn([1,0,0])
        else if(i == 1)setcategorybtn([0,1,0])
        else setcategorybtn([0,0,1])
    }

    return <Container>
        {}
        <Navbar>
            <Btn style={{marginLeft:"10%"}} onClick={()=>{btnclick(0)}} clicked={categorybtn[0]}>Pick!</Btn>
            <Btn style={{marginLeft:"10%"}} onClick={()=>{btnclick(1)}} clicked={categorybtn[1]}>Chating</Btn>
            <Btn style={{marginLeft:"10%"}} onClick={()=>{btnclick(2)}} clicked={categorybtn[2]}>Profile</Btn>
        </Navbar>
    </Container>
}

export default Mainpage

const Container = styled.div`
width:100%;
height:100%;
position:relative;
`

const Navbar = styled.div`
bottom:0;
width:100%;
height:10%;
background-color:white;
position:absolute;
border-radius:20px 20px 0 0 ;
display:flex;
align-items:center;
`

const Btn = styled.button`
all:unset;
width:20%;
height:50%;
display:flex;
align-items:center;
justify-content:center;
color:${(props)=>(props.clicked ? theme.Sub1:theme.Sub2)};
outline: none;
box-shadow: none;
&:focus {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }

  &:focus-visible {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }
`