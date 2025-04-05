import React from 'react';
import EmailSearchBar from '../components/EmailSearchBar';
import UserListItem from '../components/UserListItem';
import TestImage from '../assets/testimage.png';
import axiosInstance from '../../api/axiosInstance';

const FriendPage = () => {

    const onSearch = (text) => {
        axiosInstance.post('/addfriend', { friendemail: text })
            .then(response => {
                if (response.data.success) {
                    console.log(response.data);
                } else {
                    console.log(response.data.message);
                }
            })
            .catch(error => {
                console.error('친구 검색 오류:', error);
            });
    }

    return <>
        <div style={{ marginBottom: '16px' }}>
            <EmailSearchBar onSearch={onSearch} />
        </div>
        <div style={{ flexGrow: 1, overflowY: 'scroll' }}>
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
            <div className="chat-list-container">
                <UserListItem name="사용자 이름" profile={TestImage} />
            </div>
            <div className="chat-list-container">
                <UserListItem name="사용자 이름" profile={TestImage} />
            </div>
        </div>
    </>
}

export default FriendPage;