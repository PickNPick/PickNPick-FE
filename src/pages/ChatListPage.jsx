import React, {useState} from 'react';
import ToggleBar from '../components/ToggleBar';
import TestImage from '../assets/testimage.png';
import UserListItem from '../components/UserListItem';
import UserRequestItem from '../components/UserRequestItem';
import ChatBubble from '../components/ChatBubble';
import '../ChatListPage.css'
import styled from "styled-components"
import { theme } from "../styles/themes"
import '../styles/fonts.css'


const ChatListPage = () => {
    const [toggleIdx, setToggleIdx] = useState(0);

    const onclick = (idx) => {
        console.log(`${idx} clicked`);
        setToggleIdx(idx);
    }

    const onAccept = () => {
        console.log('친구 요청 수락!');
    }
    const onDecline = () => {
        console.log('친구 요청 거절!');
    }

    return <>

        <Bannerbar>chating</Bannerbar>

        <ToggleBar list={['친구', '메세지', '요청']} selectedIdx={toggleIdx}
            onclick={onclick} />

        {toggleIdx === 0 && (
            <div>
                <div className="chat-list-container">
                    <UserListItem name="사용자 이름" profile={TestImage} />
                </div>
                <div className="chat-list-container">
                    <UserListItem name="사용자 이름" profile={TestImage} />
                </div>
            </div>
        )}

        {toggleIdx === 1 && (
            <div className="chat-list-container">
                {/* 메세지 탭 내용 예시 */}
                <div>메세지 기능은 여기에 추가할 수 있어요.</div>
            </div>
        )}

        {toggleIdx === 2 && (
            <div>
                <div className="chat-list-container">
                    <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
                    onAccept={onAccept} onDecline={onDecline} />
                </div>
                <div className="chat-list-container">
                    <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
                    onAccept={onAccept} onDecline={onDecline} />
                </div>
                <div className="chat-list-container">
                    <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
                    onAccept={onAccept} onDecline={onDecline} />
                </div>
                <div className="chat-list-container">
                    <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
                    onAccept={onAccept} onDecline={onDecline} />
                </div>
            </div>
        )}


    </>
}

export default ChatListPage;


const Bannerbar = styled.div`
width:100%;
height:10%;
background-color:${theme.Sub1};
display:flex;
align-items:center;
justify-content:center;
color:white;
`