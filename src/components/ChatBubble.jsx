import React from 'react';
import styled from 'styled-components';

const ChatBubble = ({isMe, message, profileImage}) => {
    return <OuterDiv>
        {isMe && <>
            <Placeholder />
            <MeDiv>
                {message}
            </MeDiv>
        </>}
        {isMe || <>
            <img src={profileImage} />
            <OtherDiv>
                {message}
            </OtherDiv>
            <Placeholder />
        </>}
    </OuterDiv>
}

const OuterDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-left: 20px;
    padding-right: 20px;
    gap: 15px;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`

const MeDiv = styled.div`
    color: #FFFFFF;
    font-size: 1.05rem;
    padding: 8px 13px 8px 13px;

    background-color: #FF6B6B;
    border-radius: 20px;
    text-align: right;
`;

const OtherDiv = styled.div`
    color: #000000;
    font-size: 1.05rem;
    padding: 8px 13px 8px 13px;

    background-color: #FFFFFF;
    border-radius: 20px;
    text-align: left;
`

const Placeholder = styled.div`
    width: 30px;
    flex-grow: 1;
`

export default ChatBubble;