import React from 'react';
import styled from 'styled-components';
import TestImage from '../assets/testimage.png';
import MessageTitleBox from '../components/MessageTitleBox';
import ChatBubble from '../components/ChatBubble';
import ChatBar from '../components/ChatBar';

const MessagePage = () => {
    const onChat = () => {console.log("테스트!!")};

    return <>
        <MessageTitleBox profile={TestImage} title="이동현" subtitle="활동 중" />

        <MessageBox>
            <div style={{height: '25px'}} />

            <ChatBubble isMe={true} message="달빛에 두 눈을 적셔, 내 손을 잡고 어디론가 뛰어줘." />
            <ChatBubble isMe={true} message="거짓말같았던 그 밤을 지나 끝없이 헤맨다 해도" />
            <ChatBubble isMe={true} message="Running Through The Night." isLast />

            <ChatBubble isMe={false} profileImage={TestImage} message="달이 선명해지면" />
            <ChatBubble isMe={false} profileImage={TestImage} message="그 땐 널 담곤 해" />
            <ChatBubble isMe={false} profileImage={TestImage} message="널 안곤 해" />
            <ChatBubble isMe={false} profileImage={TestImage} message="뒤돌아보지 마," />
            <ChatBubble isMe={false} profileImage={TestImage} message="끝없이 달리면" />
            <ChatBubble isMe={false} profileImage={TestImage} message="모두가 잠들 때" />
            <ChatBubble isMe={false} profileImage={TestImage} message="우리만 남을 때" isLast />
        </MessageBox>

        <ChatBar onChat={onChat} />
    </>
}

const MessageBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export default MessagePage;