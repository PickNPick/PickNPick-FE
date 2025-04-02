import styled from "styled-components"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"



const Loginpage = ()=>{
    const navigator = useNavigate();
    useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token')
        if(token != null){
            navigator(`/mainpage?token=${token}`,{replace:true})
        }
    },[])

    const login = async()=>{
       window.location.href="http://localhost:3000/googlelogin"
    }

    return <Container>
        <Logosmall></Logosmall>
        <Logo></Logo>
        <Imgcontainer></Imgcontainer>
        <Loginbtn onClick={()=>{
            login();    
        }}></Loginbtn>
    </Container>
}

export default Loginpage

const Container = styled.div`
height:100%;
display:flex;
justify-content:center;
position:relative;
`
const Logosmall = styled.div`
width:30%;
height:3%;
top:17%;
background-color:red;
position:absolute;
`
const Logo = styled.div`
height:15%;
width:42%;
top:21%;
position:absolute;
background-color:red;
`

const Imgcontainer = styled.div`
position:absolute;
width:100%;
height:40%;
top:42%;
background-color:red;
`

const Loginbtn = styled.button`
position:absolute;
width:80%;
height:6%;
top:90%;
background-color:red;
&:hover{
transition :1s ease;
background-color:yellow;
}
`





