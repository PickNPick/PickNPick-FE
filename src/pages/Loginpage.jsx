import styled from "styled-components"


const Loginpage = ()=>{


    const login = ()=>{
       
    }

    return <Container>
        <Logosmall></Logosmall>
        <Logo></Logo>
        <Imgcontainer></Imgcontainer>
        <Loginbtn onClick={()=>{

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
width:30%;
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
height:10%;
top:85%;
background-color:red;
&:hover{
transition :1s ease;
background-color:yellow;
}
`





