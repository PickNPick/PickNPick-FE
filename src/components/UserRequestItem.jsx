import React from 'react';
import styled from 'styled-components';

const UserRequestItem = ({name, profile, explain, onAccept, onDecline}) => {
    return <ItemDiv>
        <ProfileImage src={profile}/>
        <InnerDiv>
            <UserName>{name}</UserName>
            <ExplainBox>{explain}</ExplainBox>
            <div>
                <ColorButton onClick={onAccept}>수락</ColorButton>
                <WhiteButton onClick={onDecline}>거절</WhiteButton>
            </div>
        </InnerDiv>

        <TimeBox>12:34</TimeBox>
    </ItemDiv>
}

const ItemDiv = styled.div`
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    color: black;
    gap: 25px;
`;

const InnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2px;

    >div {
        display: flex;
        flex-direction: row;
        gap: 5px;
    }
`;

const ProfileImage = styled.img`
    width: 21%;
    border-radius: 50%;
`;

const UserName = styled.div`
    font-size: 1.5rem;
`;

const ExplainBox = styled.div`
    font-size: 1rem;
`;

const ColorButton = styled.button`
    background-color: #FF6B6B;
    color: #FFFFFF;
    font-size: 0.8rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
`;

const WhiteButton = styled.button`
    background-color: #FFFFFF;
    color: #FF6B6B;
    font-size: 0.8rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
`;

const TimeBox = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;

    color: #CCCCCC;
    font-size: 0.75rem;
`;

export default UserRequestItem;