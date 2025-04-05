import React from 'react';
import styled from 'styled-components';
import TestImage from '../assets/testimage.png';
import MessageTitleBox from '../components/MessageTitleBox';

const MessagePage = () => {
    return <>
        <MessageTitleBox profile={TestImage} title="이동현" subtitle="활동 중" />
    </>
}

export default MessagePage;