import React from 'react';
import MessageListItem from '../components/MessageListItem';
import styled from 'styled-components';
import TestImage from '../assets/testimage.png';
import EmailSearchBar from '../components/EmailSearchBar';
import UserRequestItem from '../components/UserRequestItem';

const FriendRequestPage = ({onAccept, onDecline}) => {
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
    </div>
}

export default FriendRequestPage;