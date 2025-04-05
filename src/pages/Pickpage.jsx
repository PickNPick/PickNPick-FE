import styled from "styled-components"
import { theme } from "../styles/themes"
import logoimg from "../assets/loginpageimg/logoimg.png"
import '../styles/fonts.css'
import { useNavigate } from "react-router-dom"


const Pickpage = ()=>{

    const img = logoimg
    const navigator = useNavigate();


    return <>
        <Topbar>
            <img src={img} style={{width:"10%",height:"50%"}}></img>
        </Topbar>
        <Bannerbar>픽앤픽 당신의 이상형을 골라보세요!</Bannerbar>
        <Container>
            <Block onClick={()=>{navigator("/worldcup",{replace : false})}}><Text>이상형 월드컵</Text></Block>
            <Block onClick={()=>{navigator("/randomfriend",{replace : false})}}><Text>랜덤 친구 찾기</Text></Block>
            <Block onClick={()=>{}}><Text>Pick & Pick!!~~</Text></Block>
        </Container>
    </>
}

export default Pickpage

const Container = styled.div`
width:100%;
height:80%;
background-color:${theme.Main};
display:flex;
flex-direction:column;
align-items:center;
overflow:auto;
`

const Block = styled.div`
width:80%;
height:150px;
background-color:${theme.Sub1};
margin-top:5%;
border-radius:20px 20px 20px 20px;
position:relative;
`

const Text = styled.div`
top:20%;
left:10%;
position:absolute;
font-family: HakgyoansimChilpanjiugaeTTF-B;
font-weight:600;
font-size:28px;
color:white;
`

const Topbar = styled.div`
width:100%;
height:10%;
background-color:${theme.Main};
display:flex;
align-items:center;
justify-content:center;
`

const Bannerbar = styled.div`
width:100%;
height:10%;
background-color:${theme.Sub1};
display:flex;
align-items:center;
justify-content:center;
color:white;
`