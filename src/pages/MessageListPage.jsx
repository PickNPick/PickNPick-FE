import React from 'react';
import MessageListItem from '../components/MessageListItem';
import styled from 'styled-components';
import TestImage from '../assets/testimage.png';
import { useNavigate } from 'react-router-dom';

const MessageListPage = () => {
    const navigate = useNavigate();

    return <MessageListBox>
        <MessageListItem name="사용자 이름" profile={TestImage} explain="안녕! 나는 이동현이라고 해." onClick={() => navigate('/message')} />
        <MessageListItem name="사용자 이름2" profile={TestImage} explain="ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ" />
    </MessageListBox>
}

const MessageListBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 10px 30px;
`;

export default MessageListPage;