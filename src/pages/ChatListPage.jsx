import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import ToggleBar from '../components/ToggleBar';
import TestImage from '../assets/testimage.png';
import UserListItem from '../components/UserListItem';
import UserRequestItem from '../components/UserRequestItem';
import '../ChatListPage.css'
import styled from "styled-components"
import { theme } from "../styles/themes"
import '../styles/fonts.css'
import EmailSearchBar from '../components/EmailSearchBar';
import MessageListItem from '../components/MessageListItem';

const ChatListPage = () => {
    const [toggleIdx, setToggleIdx] = useState(0);
    const navigate = useNavigate();

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

        <Bannerbar>Chating</Bannerbar>

        <div style={{ marginBottom: '16px' }}>
            <ToggleBar
                list={['친구', '메세지', '요청']}
                selectedIdx={toggleIdx}
                onclick={onclick}
        />
        </div>

        

        {toggleIdx === 0 && (
            <div>
                <div style={{ marginBottom: '16px' }}>
            <EmailSearchBar/>
        </div>
                <div className="chat-list-container">
                    <UserListItem name="사용자 이름" profile={TestImage} />
                </div>
                <div className="chat-list-container">
                    <UserListItem name="사용자 이름" profile={TestImage} />
                </div>
            </div>
        )}

        {toggleIdx === 1 && (
            <MessageListBox>
                <MessageListItem name="사용자 이름" profile={TestImage} explain="안녕! 나는 이동현이라고 해." onClick={() => navigate('/message')} />
                <MessageListItem name="사용자 이름2" profile={TestImage} explain="ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ" />
            </MessageListBox>
        )}

        {toggleIdx === 2 && (
            <div>
                <div style={{ marginBottom: '16px' }}>
                    <EmailSearchBar/>
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
                <div className="chat-list-container">
                    <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
                    onAccept={onAccept} onDecline={onDecline} />
                </div>
            </div>
        )}


    </>
}

const MessageListBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 10px 30px;
`;

const Bannerbar = styled.div`
font-family: 'Dela Gothic One', sans-serif;
font-size: 15px;
width:100%;
height:9%;
background-color:${theme.Sub1};
display:flex;
align-items:center;
justify-content:center;
color:white;
margin-bottom: 16px; 
`

export default ChatListPage;