import React from 'react';
import MessageListItem from '../components/MessageListItem';
import styled from 'styled-components';
import TestImage from '../assets/testimage.png';
import EmailSearchBar from '../components/EmailSearchBar';
import UserRequestItem from '../components/UserRequestItem';

const FriendRequestPage = ({onAccept, onDecline}) => {
    return <>
        <div style={{ marginBottom: '16px' }}>
            <EmailSearchBar/>
        </div>
        <Container>
            <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
            onAccept={onAccept} onDecline={onDecline} />
            <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
            onAccept={onAccept} onDecline={onDecline} />
            <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
            onAccept={onAccept} onDecline={onDecline} />
            <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
            onAccept={onAccept} onDecline={onDecline} />
            <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
            onAccept={onAccept} onDecline={onDecline} />
            <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
            onAccept={onAccept} onDecline={onDecline} />
            <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
            onAccept={onAccept} onDecline={onDecline} />
            <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
            onAccept={onAccept} onDecline={onDecline} />
            <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
            onAccept={onAccept} onDecline={onDecline} />
            <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
            onAccept={onAccept} onDecline={onDecline} />
        </Container>
    </>
}

const Container = styled.div`
    flex-grow: 1;
    overflow-y: scroll;
    padding: 10px 30px;
`

export default FriendRequestPage;