import React from 'react';
import styled from 'styled-components';

const MessageTitleBox = ({profile, title, subtitle}) => {
    return <Container>
        <ProfileImg src={profile} />
        <InnerContainer>
            <TitleBox>{title}</TitleBox>
            <SubtitleBox>{subtitle}</SubtitleBox>
        </InnerContainer>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: row;

    background-color: white;
    color: black;

    padding: 20px;
    gap: 20px;
    align-items: center;
`;

const ProfileImg = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: start;
`;

const TitleBox = styled.div`
    font-size: 1.5rem;
`;

const SubtitleBox = styled.div`
    font-size: 1rem;
`;

export default MessageTitleBox;