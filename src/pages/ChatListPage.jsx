import React, {useState} from 'react';
import ToggleBar from '../components/ToggleBar';
import TestImage from '../assets/testimage.png';
import UserListItem from '../components/UserListItem';
import UserRequestItem from '../components/UserRequestItem';
import ChatBubble from '../components/ChatBubble';

const ChatListPage = () => {
    const [toggleIdx, setToggleIdx] = useState(0);

    const onclick = (idx) => {
        console.log(`${idx} clicked`);
        setToggleIdx(idx);
    }

    const onAccept = () => {
        console.log('친구 요청 수락!');
    }
    const onDecline = () => {
        console.log('친구 요청 거절!');
    }

    return <>
        채팅 화면입니다.
        <ToggleBar list={['친구', '메세지', '요청']} selectedIdx={toggleIdx}
            onclick={onclick} />

        <UserListItem name="사용자 이름" profile={TestImage} />
        <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
            onAccept={onAccept} onDecline={onDecline} />
        <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
            onAccept={onAccept} onDecline={onDecline} />
        <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
            onAccept={onAccept} onDecline={onDecline} />
        <UserRequestItem name="사용자 이름" profile={TestImage} explain="랜덤 매칭을 통해 요청했습니다." 
            onAccept={onAccept} onDecline={onDecline} />

        <ChatBubble isMe={true} message="안녕하세요 테스트 메시지입니다." />
        <ChatBubble isMe={false} message="안녕하세요 테스트 메시지입니다." profileImage={TestImage} />
        <ChatBubble isMe={false} message="안녕하세요 테스트 메시지입니다." profileImage={TestImage} />
    </>
}

export default ChatListPage;