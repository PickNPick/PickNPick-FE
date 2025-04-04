import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/themes";
import logoimg from "../assets/loginpageimg/logoimg.png";
import loadingimg from "../assets/loadingimg/loadingimg.png";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Worldcuppage = () => {
  const navigator = useNavigate();
  const controllerRef = useRef(null);


  const img = logoimg;
  const img2 = loadingimg;

  const [isloading, setisloading] = useState(true);
  const [worldcupdata, setworldcupdata] = useState([]);
  const [worldcupdata2, setworldcupdata2] = useState([]);
  const [currentinfo, setcurrentinfo] = useState([{}, {}]);
  const [tournement, settournement] = useState(32);
  const [curtournement, setcurtournement] = useState(0);
  const [isoverlay, setisoverlay] = useState(false)

  useEffect(() => {
    getdata();

    return () => {
      controllerRef.current?.abort(); // 언마운트 시 요청 중단
    };
  }, []);

  const getdata = async () => {
    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      const result = await axiosInstance.get("/getworldcup", {
        signal: controller.signal,
      });
      setworldcupdata(result.data);
      setcurrentinfo([result.data[0], result.data[1]]);
      setisloading(false);
    } catch (err) {
      if (axios.isCancel(err) || err.name === "CanceledError" || err.name === "AbortError") {
        console.log("요청이 취소됨");
        return;
      }
      console.error(err);
      //navigator("/mainpage", { replace: true })
      if (err.response?.data?.error) alert(err.response.data.error);
    }
  };

  const selectbtn = (i) => {
    if (tournement === 32) {
      if (curtournement + 2 != 32)
        setcurrentinfo([worldcupdata[curtournement + 2], worldcupdata[curtournement + 3]]);
      const newdata = worldcupdata2;
      newdata.push(worldcupdata[curtournement + i]);
      setworldcupdata2(newdata);
      if (curtournement + 2 === 32) {
        settournement(16);
        setcurtournement(0);
        setworldcupdata([]);
        setcurrentinfo([worldcupdata2[0], worldcupdata2[1]]);
      } else setcurtournement(curtournement + 2);
    }
    if (tournement === 16) {
      if (curtournement + 2 != 16)
        setcurrentinfo([worldcupdata2[curtournement + 2], worldcupdata2[curtournement + 3]]);
      const newdata = worldcupdata;
      newdata.push(worldcupdata2[curtournement + i]);
      setworldcupdata(newdata);
      if (curtournement + 2 === 16) {
        settournement(8);
        setcurtournement(0);
        setworldcupdata2([]);
        setcurrentinfo([worldcupdata[0], worldcupdata[1]]);
      } else setcurtournement(curtournement + 2);
    }
    if (tournement === 8) {
      if (curtournement + 2 != 8)
        setcurrentinfo([worldcupdata[curtournement + 2], worldcupdata[curtournement + 3]]);
      const newdata = worldcupdata2;
      newdata.push(worldcupdata[curtournement + i]);
      setworldcupdata2(newdata);
      if (curtournement + 2 === 8) {
        settournement(4);
        setcurtournement(0);
        setworldcupdata([]);
        setcurrentinfo([worldcupdata2[0], worldcupdata2[1]]);
      } else setcurtournement(curtournement + 2);
    }
    if (tournement === 4) {
      if (curtournement + 2 != 4)
        setcurrentinfo([worldcupdata2[curtournement + 2], worldcupdata2[curtournement + 3]]);
      const newdata = worldcupdata;
      newdata.push(worldcupdata2[curtournement + i]);
      setworldcupdata(newdata);
      if (curtournement + 2 === 4) {
        settournement(2);
        setcurtournement(0);
        setworldcupdata2([]);
        setcurrentinfo([worldcupdata[0], worldcupdata[1]]);
      } else setcurtournement(curtournement + 2);
    }
    if (tournement === 2) {
      navigator(`/myfavorite?email=${currentinfo[i].email}`, { replace: true });
    }
  };

  const clickback = () => {
    setisoverlay(true)
  }

  return (
    <Container>
      {isoverlay &&
        <Overlay>
          <Overlay_container>
            <div style={{ fontWeight:"700" ,width: "100%", height: "70%", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid grey" }}>이상형 월드컵을 그만하시겠습니까?</div>
            <div style={{ width: "100%", height: "30%", display: "flex", flexDirection: "row" }}>
              <div style={{ width: "50%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => { setisoverlay(false) }}>계속하기</div>
              <div style={{ color:`${theme.Sub1}` ,width: "50%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderLeft: "1px solid grey" }} onClick={(() => { navigator("/mainpage", { replace: true }) })}>그만하기</div>
            </div>
          </Overlay_container>
        </Overlay>
      }
      <Topbar>
        <MdOutlineArrowBackIosNew onClick={() => { clickback() }} style={{ position: "absolute", left: "4%", color: `${theme.Sub1}` }} />
        <img src={img} style={{ width: "10%", height: "50%", position: "absolute", left: "45%" }} />
      </Topbar>
      {isloading ? (
        <Loadingview>
          <Textcontainer>랜덤 친구 찾는중....</Textcontainer>
          <Imgcontainer src={img2} />
          <CancelBtn
            onClick={() => {
              controllerRef.current?.abort(); // 요청 취소
              navigator("/mainpage", { replace: true });
            }}
          >
            취소
          </CancelBtn>
        </Loadingview>
      ) : (
        <Worldcupview>{/* 월드컵 뷰 컨텐츠 */}</Worldcupview>
      )}
    </Container>
  );
};

export default Worldcuppage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position:relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index:9000;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay_container = styled.div`
  width:75%;
  height:20%;
  background-color:white;
  font-family: Pretendard-Regular;
  font-weight: 400;
  font-size: 16px;
`

const Loadingview = styled.div`
  width: 100%;
  height: 90%;
  background-color: ${theme.Sub1};
  position: relative;
  display: flex;
  justify-content: center;
`;

const Worldcupview = styled.div`
  width: 100%;
  height: 90%;
  background-color: ${theme.Sub1};
`;

const Topbar = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${theme.Main};
  display: flex;
  align-items: center;
  position:relative;
`;

const CancelBtn = styled.div`
  border-radius: 20px;
  position: absolute;
  top: 85%;
  width: 80%;
  height: 10%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.Sub1};
  font-family: Pretendard-Regular;
  font-weight: 600;
  font-size: 20px;
`;

const Imgcontainer = styled.img`
  position: absolute;
  top: 40%;
  left: 32%;
`;

const Textcontainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: HakgyoansimChilpanjiugaeTTF-B;
  font-weight: 600;
  font-size: 28px;
  width: 80%;
  height: 10%;
  color: white;
  top: 30%;
`;
