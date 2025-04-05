import React, { useState, useEffect } from 'react';
import EmailSearchBar from '../components/EmailSearchBar';
import UserListItem from '../components/UserListItem';
import TestImage from '../assets/testimage.png';
import axiosInstance from '../../api/axiosInstance';

const FriendPage = () => {
    // 친구 목록 상태 관리
    const [friends, setFriends] = useState([]);
    // 로딩 상태 관리
    const [loading, setLoading] = useState(true);
    // 에러 상태
    const [error, setError] = useState(null);

    useEffect(() => {
        // 사용자 이메일 가져오기 (로컬 스토리지에서 가져온다고 가정)
        const userEmail = localStorage.getItem('userEmail');

        // 친구 목록 가져오기
        const fetchFriendList = async () => {
            try {
                // API 호출
                const response = await axiosInstance.post('/getfriendlist', {
                    useremail: userEmail
                });

                // 데이터 확인
                if (response.data && response.data.length > 0 && response.data[0].friends) {
                    setFriends(response.data[0].friends);
                } else {
                    setFriends([]);
                }
                setLoading(false);
            } catch (err) {
                console.error('친구 목록 가져오기 오류:', err);
                setError('친구 목록을 불러오는데 실패했습니다.');
                setLoading(false);
            }
        };

        // 이메일이 있으면 친구 목록 가져오기
        if (userEmail) {
            fetchFriendList();
        } else {
            setLoading(false);
            setError('로그인 정보를 찾을 수 없습니다.');
        }
    }, []);

    // 친구 추가 함수
    const onSearch = (text) => {
        const userEmail = localStorage.getItem('userEmail');

        axiosInstance.post('/addfriend', {
            useremail: userEmail,
            friendemail: text
        })
            .then(response => {
                if (response.data.success) {
                    console.log(response.data);

                    // 친구 추가 후 목록 새로고침
                    axiosInstance.post('/getfriendlist', {
                        useremail: userEmail
                    })
                        .then(refreshResponse => {
                            if (refreshResponse.data && refreshResponse.data.length > 0) {
                                setFriends(refreshResponse.data[0].friends);
                            }
                        })
                        .catch(refreshError => {
                            console.error('친구 목록 새로고침 오류:', refreshError);
                        });

                    alert('친구가 추가되었습니다.');
                } else {
                    console.log(response.data.message);
                    alert(response.data.message || '친구 추가에 실패했습니다.');
                }
            })
            .catch(error => {
                console.error('친구 검색 오류:', error);
                alert('친구 추가 중 오류가 발생했습니다.');
            });
    };

    return <>
        <div style={{ marginBottom: '16px' }}>
            <EmailSearchBar onSearch={onSearch} />
        </div>
        <div style={{ flexGrow: 1, overflowY: 'scroll' }}>
            {loading ? (
                <div className="loading-message">
                    <p>친구 목록을 불러오는 중...</p>
                </div>
            ) : error ? (
                <div className="error-message">
                    <p>{error}</p>
                </div>
            ) : friends.length === 0 ? (
                <div className="empty-message">
                    <p>친구 목록이 비어 있습니다.</p>
                    <p>이메일로 친구를 검색하여 추가해보세요.</p>
                </div>
            ) : (
                // 친구 목록을 매핑하여 표시
                friends.map((friend, index) => (
                    <div className="chat-list-container" key={index}>
                        <UserListItem
                            name={friend.name}
                            profile={friend.profileImage || TestImage}
                        />
                    </div>
                ))
            )}
        </div>
    </>
}

export default FriendPage;