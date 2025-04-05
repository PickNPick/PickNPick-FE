import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import TestImage from '../assets/testimage.png';
import MessageTitleBox from '../components/MessageTitleBox';
import ChatBubble from '../components/ChatBubble';
import ChatBar from '../components/ChatBar';
import { IoEllipseSharp } from 'react-icons/io5';
import { theme } from "../styles/themes";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const MessagePage = () => {
    const navigate = useNavigate();

    const SAMPLE_MESSAGE = [
        {isMe: true, message: "달빛에 두 눈을 적셔, 내 손을 잡고 어디론가 뛰어줘."},
        {isMe: true, message: "거짓말같았던 그 밤을 지나 끝없이 헤맨다 해도"},
        {isMe: true, message: "Running Through The Night."},
        {isMe: false, message: "Wait for the night"},
        {isMe: false, message: "달이 선명해지면"},
        {isMe: false, message: "그 땐 널 담곤 해"},
        {isMe: false, message: "널 안곤 해"},
        {isMe: false, message: "뒤돌아보지 마"},
        {isMe: false, message: "끝없이 달리면"},
        {isMe: false, message: "모두가 잠들 때"},
        {isMe: false, message: "우리만 남을 때"},
    ];

    let [sampleMessage, setSampleMessage] = useState(SAMPLE_MESSAGE);
    const lastRef = useRef(null);

    const onChat = (message) => {
        setSampleMessage([...sampleMessage, {
            isMe: true,
            message
        }]);
    };

    // 메시지가 업데이트될 때 아래로 스크롤
    useEffect(() => {
        lastRef.current.scrollIntoView();
    }, [sampleMessage]);

    for(let i=0; i<sampleMessage.length; i++)
    {
        if (i == sampleMessage.length-1 || sampleMessage[i].isMe != sampleMessage[i+1].isMe)
            sampleMessage[i].isLast = true;
        else
            sampleMessage[i].isLast = false;
    }
    const clickback = () => {
        navigate(-1);
      }

    return <Container>
     

        <Topbar>
                <MdOutlineArrowBackIosNew onClick={() => { clickback() }} style={{ position: "absolute", left: "4%", color: `white` }} />
                Chatting
        </Topbar>

        <MessageTitleBox profile={TestImage} title="이동현" subtitle="활동 중" />

        <MessageBox>
            <div style={{height: '25px'}} />

            {sampleMessage.map(({isMe, message, isLast}, idx) => <ChatBubble key={idx} isMe={isMe} profileImage={TestImage} message={message} isLast={isLast}/>)}

            <div ref={lastRef} />

            {/* <ChatBubble isMe={true} message="달빛에 두 눈을 적셔, 내 손을 잡고 어디론가 뛰어줘." />
            <ChatBubble isMe={true} message="거짓말같았던 그 밤을 지나 끝없이 헤맨다 해도" />
            <ChatBubble isMe={true} message="Running Through The Night." isLast />

            <ChatBubble isMe={false} profileImage={TestImage} message="달이 선명해지면" />
            <ChatBubble isMe={false} profileImage={TestImage} message="그 땐 널 담곤 해" />
            <ChatBubble isMe={false} profileImage={TestImage} message="널 안곤 해" />
            <ChatBubble isMe={false} profileImage={TestImage} message="뒤돌아보지 마," />
            <ChatBubble isMe={false} profileImage={TestImage} message="끝없이 달리면" />
            <ChatBubble isMe={false} profileImage={TestImage} message="모두가 잠들 때" />
            <ChatBubble isMe={false} profileImage={TestImage} message="우리만 남을 때" isLast /> */}
        </MessageBox>

        <ChatBar onChat={onChat} />
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Pretendard-Regular';
    height: 100%;
`;

const MessageBox = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Pretendard-Regular';
    gap: 4px;

    flex-grow: 1;
    overflow-y: scroll;
`;

const Topbar = styled.div`

  width: 100%;
  height: 10%;
  font-family: 'Dela Gothic One', sans-serif;
  font-size: 15px;
  background-color: #FF5A6D;
  display: flex;
  align-items: center;
  position:relative;
  justify-content:center;
  margin-top: 33px;
  color:white;
`;

export default MessagePage;