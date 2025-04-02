import React from 'react';
import styled from 'styled-components';

const UserListItem = ({name, profile}) => {
    return <ItemDiv>
        <ProfileImage src={profile}/>
        <UserName>{name}</UserName>
    </ItemDiv>
}

const ItemDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: black;
    gap: 20px;
`;

const ProfileImage = styled.img`
    width: 18%;
    border-radius: 50%;
`;

const UserName = styled.div`
    font-size: 1.5rem;
`;

export default UserListItem;