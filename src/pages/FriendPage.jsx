import axios from 'axios';
import React, { useState, useEffect } from 'react';
import EmailSearchBar from '../components/EmailSearchBar';
import UserListItem from '../components/UserListItem';
import React, { useEffect, useState } from 'react';
import TestImage from '../assets/testimage.png';
import axiosInstance from '../../api/axiosInstance';
import styled from 'styled-components';

const FriendPage = () => {
  const [friends, setFriends] = useState([]);
  const [noResult, setNoResult] = useState(false); 

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const token = localStorage.getItem("token");
        const result = await axios.get('http://localhost:3000/getfriendlist', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("받은 전체 응답:", result.data);
        console.log("받은 친구 목록:", result.data.friends); 
        setFriends(result.data.friends || []);


        setNoResult(false); // 초기 상태에서는 false
      } catch (err) {
        console.error('친구 목록 불러오기 실패:', err);
      }
    };

    fetchFriends();
  }, []);

  const handleSearchResult = (results) => {
    if (results.length === 0) {
      setFriends([]);
      setNoResult(true);
    } else {
      setFriends(results);
      setNoResult(false);
    }
  };

  return (
    <>
      <div style={{ marginBottom: '16px' }}>
        <EmailSearchBar onSearch={handleSearchResult} />
      </div>
      <ScrollContainer>
        {noResult ? (
          <NoResultMessage>검색 결과가 없습니다.</NoResultMessage>
        ) : (
          friends.map((friend) => (
            <div className="chat-list-container" key={friend.email}>
              <UserListItem name={friend.name} profile={friend.profileImage || TestImage} />
            </div>
          ))
        )}
      </ScrollContainer>
    </>
  );
};

export default FriendPage;

const ScrollContainer = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NoResultMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #999;
  font-size: 16px;
`;
