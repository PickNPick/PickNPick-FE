import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/themes";
import logoimg from "../assets/loginpageimg/logoimg.png";
import loadingimg from "../assets/loadingimg/loadingimg.png";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Randomfriendpage = () => {
  const navigator = useNavigate();
  const controllerRef = useRef(null);


  const img = logoimg;
  const img2 = loadingimg;

  const [isloading, setisloading] = useState(true);


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
      const result = await axiosInstance.get(`${랜덤한명뽑기uri넣기}`, {
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
      navigator("/mainpage", { replace: true });
      if (err.response?.data?.error) alert(err.response.data.error);
    }
  };

  

  return (
    <Container>
      <Topbar>
        <img src={img} style={{ width: "10%", height: "50%" }} />
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
        <div>{한명뽑는페이지}</div>
      )}
    </Container>
  );
};

export default Randomfriendpage;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

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
  justify-content: center;
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
