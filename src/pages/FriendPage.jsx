import React from 'react';
import EmailSearchBar from '../components/EmailSearchBar';
import UserListItem from '../components/UserListItem';
import TestImage from '../assets/testimage.png';

const FriendPage = () => {
    return <>
        <div style={{ marginBottom: '16px' }}>
            <EmailSearchBar/>
        </div>
        <div style={{flexGrow: 1, overflowY: 'scroll'}}>
            <div className="chat-list-container">
                <UserListItem name="사용자 이름" profile={TestImage} />
            </div>
            <div className="chat-list-container">
                <UserListItem name="사용자 이름" profile={TestImage} />
            </div>
            <div className="chat-list-container">
                <UserListItem name="사용자 이름" profile={TestImage} />
            </div>
            <div className="chat-list-container">
                <UserListItem name="사용자 이름" profile={TestImage} />
            </div>
            <div className="chat-list-container">
                <UserListItem name="사용자 이름" profile={TestImage} />
            </div>
            <div className="chat-list-container">
                <UserListItem name="사용자 이름" profile={TestImage} />
            </div>
            <div className="chat-list-container">
                <UserListItem name="사용자 이름" profile={TestImage} />
            </div>
            <div className="chat-list-container">
                <UserListItem name="사용자 이름" profile={TestImage} />
            </div>
            <div className="chat-list-container, onClick={handleUserClick}">
                <UserListItem name="사용자 이름" profile={TestImage} />
            </div>
            <div className="chat-list-container, onClick={handleUserClick}">
                <UserListItem name="사용자 이름" profile={TestImage} />
            </div>
        </div>
    </>
}

export default FriendPage;