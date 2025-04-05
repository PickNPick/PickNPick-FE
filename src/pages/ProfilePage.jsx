import { useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/themes"; // 이미 설정한 theme 사용

// 프로필 페이지 컴포넌트
const ProfilePage = () => {
  const [categorybtn, setCategoryBtn] = useState([0, 0, 1]); // 기본적으로 Profile 페이지가 활성화되도록 설정
  const [isSinging, setIsSinging] = useState(false); // '노래 듣기' 상태

  const [introText, setIntroText] = useState("귀여운 다람쥐"); // 자기소개 텍스트 상태

  const btnClick = (i) => {
    if (i === 0) setCategoryBtn([1, 0, 0]);
    else if (i === 1) setCategoryBtn([0, 1, 0]);
    else setCategoryBtn([0, 0, 1]);
  };

  return (
    <Container>
      {/* 상단 빨간색 바 */}
      <TopBar>
        <Title>Profile</Title>
      </TopBar>

      {/* 첫 번째 하얀색 박스 */}
      <ProfileBox>
        <TextArea
          value={introText}
          onChange={(e) => setIntroText(e.target.value)}
          
        />
      </ProfileBox>

      {/* 두 번째 하얀색 박스 */}
      <SecondProfileBox>
        <TextArea
          
        />
      </SecondProfileBox>

      {/* 세 번째 하얀색 박스 */}
      <ThirdProfileBox>
        <TextArea
          
        />
      </ThirdProfileBox>

      {/* 네 번째 하얀색 박스 */}
      <FourthProfileBox>
        <TextArea
          
        />
      </FourthProfileBox>

      {/* 다섯 번째 하얀색 박스 */}
      <FifthProfileBox>
        <TextArea
          
        />
      </FifthProfileBox>

      {/* 여섯 번째 하얀색 박스 */}
      <SixthProfileBox>
        <TextArea
          
        />
      </SixthProfileBox>

      {/* 일곱 번째 하얀색 박스 */}
      <SeventhProfileBox>
        <TextArea
          
        />
      </SeventhProfileBox>

      {/* 여덟 번째 하얀색 박스 */}
      <EightProfileBox>
        <TextArea
          
        />
      </EightProfileBox>

      {/* 프로필 정보 - 여기에 텍스트 제거 */}
      <ProfileContainer>
        <ProfileDetails>
          {/* 모든 텍스트 항목을 제거했습니다 */}
        </ProfileDetails>
      </ProfileContainer>

      {/* 하단 네비게이션 바 */}
      <NavBar>
        <NavButton clicked={categorybtn[0]} onClick={() => btnClick(0)}>
          Pick!
        </NavButton>
        <NavButton clicked={categorybtn[1]} onClick={() => btnClick(1)}>
          Chating
        </NavButton>
        <NavButton clicked={categorybtn[2]} onClick={() => btnClick(2)}>
          Profile
        </NavButton>
      </NavBar>
    </Container>
  );
};

// 스타일링
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBar = styled.div`
  width: 100%;
  height: 52px;
  background-color: #FF6B6B;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  top: 34px;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const ProfileBox = styled.div`
  width: 391px; /* 최대 너비 설정 */
  height: 132px;
  background-color: white;
  display: flex;
  border-radius: 8px;
  padding: 10px;
  margin-top: 50px;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  justify-content: center; /* 내용 중앙 정렬 */
`;

const LeftRightBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`;

const TextArea = styled.textarea`
  width: 50%;
  height: 100%;
  font-size: 14px; /* 글자 크기 조정 */
  font-family: 'Pretendard', sans-serif;
  background-color: #fff;
  color: #FF6B6B;
  padding: 8px;
  border: none;
  border-radius: 8px;
  margin-left: auto;
  box-sizing: border-box;
  line-height: 1.5;
  letter-spacing: -0.5px;
  resize: none; /* 크기 조정 방지 */
  overflow: hidden; /* 넘칠 경우 스크롤 숨기기 */
  text-overflow: ellipsis; /* 넘친 텍스트 잘리게 처리 */
  word-wrap: break-word; /* 단어가 넘칠 때 자동으로 줄바꿈 처리 */
`;



const SecondProfileBox = styled.div`
  width: 391px; /* 요청하신 313px 너비 */
  height: 35px; /* 요청하신 44px 높이 */
  background-color: white;
  display: flex;
  border-radius: 8px;
  padding: 10px;
  margin-top: 12px; /* 첫 번째 박스와 간격 조정 */
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  justify-content: center; /* 내용 중앙 정렬 */
`;

const ThirdProfileBox = styled.div`
  width: 391px; /* 요청하신 313px 너비 */
  height: 35px; /* 요청하신 44px 높이 */
  background-color: white;
  display: flex;
  border-radius: 8px;
  padding: 10px;
  margin-top: 12px; /* 첫 번째 박스와 간격 조정 */
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  justify-content: center; /* 내용 중앙 정렬 */
`;

const FourthProfileBox = styled.div`
  width: 391px; /* 요청하신 313px 너비 */
  height: 35px; /* 요청하신 44px 높이 */
  background-color: white;
  display: flex;
  border-radius: 8px;
  padding: 10px;
  margin-top: 12px; /* 첫 번째 박스와 간격 조정 */
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  justify-content: center; /* 내용 중앙 정렬 */
`;

const FifthProfileBox = styled.div`
  width: 391px; /* 요청하신 313px 너비 */
  height: 35px; /* 요청하신 44px 높이 */
  background-color: white;
  display: flex;
  border-radius: 8px;
  padding: 10px;
  margin-top: 12px; /* 첫 번째 박스와 간격 조정 */
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  justify-content: center; /* 내용 중앙 정렬 */
`;

const SixthProfileBox = styled.div`
  width: 391px; /* 요청하신 313px 너비 */
  height: 35px; /* 요청하신 44px 높이 */
  background-color: white;
  display: flex;
  border-radius: 8px;
  padding: 10px;
  margin-top: 12px; /* 첫 번째 박스와 간격 조정 */
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  justify-content: center; /* 내용 중앙 정렬 */
`;

const SeventhProfileBox = styled.div`
  width: 391px; /* 요청하신 313px 너비 */
  height: 35px; /* 요청하신 44px 높이 */
  background-color: white;
  display: flex;
  border-radius: 8px;
  padding: 10px;
  margin-top: 12px; /* 첫 번째 박스와 간격 조정 */
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  justify-content: center; /* 내용 중앙 정렬 */
`;

const EightProfileBox = styled.div`
  width: 391px; /* 요청하신 313px 너비 */
  height: 93px; /* 요청하신 44px 높이 */
  background-color: white;
  display: flex;
  border-radius: 8px;
  padding: 10px;
  margin-top: 12px; /* 첫 번째 박스와 간격 조정 */
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  justify-content: center; /* 내용 중앙 정렬 */
`;

const ProfileContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.Main};
  overflow: auto;
`;

const ProfileDetails = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const NavBar = styled.div`
  width: 100%;
  height: 10%;
  background-color: white;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px 20px 0 0;
`;

const NavButton = styled.button`
  all: unset;
  width: 30%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.clicked ? theme.Sub1 : theme.Sub2)};
  font-family: Dela Gothic One;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.clicked ? theme.Sub1 : "lightgray")};
  }
`;

export default ProfilePage;
