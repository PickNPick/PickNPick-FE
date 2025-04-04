import { useEffect, useState } from "react"
import styled from "styled-components"
import { theme } from "../styles/themes"
import logoimg from "../assets/loginpageimg/logoimg.png"
import loadingimg from "../assets/loadingimg/loadingimg.png"
import axiosInstance from "../../api/axiosInstance"
import { useNavigate } from "react-router-dom"


const Worldcuppage = () => {

    const[currentinfo,setcurrentinfo] = useState([{},{}])

    const navigator = useNavigate();
    const img = logoimg
    const img2 = loadingimg


    const [isloading, setisloading] = useState(true)
    const [worldcupdata, setworldcupdata] = useState([])
    const [mydata, setmydata] = useState()

    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        try {
            const myresult = await axiosInstance.get("/getmyinfo")
            console.log(myresult.data)
            setmydata(myresult.data)
            const result = await axiosInstance.get("/getworldcup")
            setworldcupdata(result.data)
            setisloading(false)
        }
        catch (err) {
            console.error(err)
            navigator("/mainpage", { replace: true });
            alert(err.response.data.error)
        }
    }


    return <Container>
        <Topbar>
            <img src={img} style={{ width: "10%", height: "50%" }}></img>
        </Topbar>
        {isloading &&
            <Loadingview>
                <Textcontainer>랜덤 친구 찾는중....</Textcontainer>
                <Imgcontainer src={img2}></Imgcontainer>
                <CancelBtn onClick={() => { }}>취소</CancelBtn>
            </Loadingview>
        }
        {!isloading &&
            <Worldcupview>
                

            </Worldcupview>}
    </Container>
}

export default Worldcuppage

const Container = styled.div`
width:100%;
height:100%;
`

const Loadingview = styled.div`
width:100%;
height:90%;
background-color:${theme.Sub1};
position:relative;
display:flex;
justify-content:center;
`

const Worldcupview = styled.div`
width:100%;
height:90%;
background-color:${theme.Sub1};
`

const Topbar = styled.div`
width:100%;
height:10%;
background-color:${theme.Main};
display:flex;
align-items:center;
justify-content:center;
`

const CancelBtn = styled.div`
border-radius: 20px 20px 20px 20px;
position:absolute;
top:85%;
width:80%;
height:10%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
color:${theme.Sub1};
font-family:Pretendard-Regular;
font-weight:600;
font-size:20px;
`

const Imgcontainer = styled.img`
position:absolute;
top:40%;
left:32%;
`

const Textcontainer = styled.div`
position:absolute;
display:flex;
align-items:center;
justify-content:center;
font-family: HakgyoansimChilpanjiugaeTTF-B;
font-weight:600;
font-size:28px;
width:80%;
height:10%;
color:white;
top:30%;
`