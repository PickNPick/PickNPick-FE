import React, { useState } from 'react';
import styled from 'styled-components';
import PlusButton from '../assets/plusbutton.svg';
import SendButton from '../assets/chat_send_bt.svg';

const ChatBar = ({onChat}) => {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }

    return <Container>
        <ImageButton src={PlusButton} />

        <InputBox type="text" onChange={onChange} value={text} />

        <ImageButton src={SendButton} />
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: white;
    color: black;
    border-radius: 30px;
    margin: 10px;
    padding: 7px;
    gap: 8px;
`;

const InputBox = styled.input`
    all: unset;
    text-align: left;
    flex-grow: 1;
`;

const ImageButton = styled.img`
    height: 36px;
`;

export default ChatBar;