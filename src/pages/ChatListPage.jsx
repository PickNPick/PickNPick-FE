import React, {useState} from 'react';
import ToggleBar from '../components/ToggleBar';

const ChatListPage = () => {
    const [toggleIdx, setToggleIdx] = useState(0);

    const onclick = (idx) => {
        console.log(`${idx} clicked`);
        setToggleIdx(idx);
    }

    return <>
        채팅 화면입니다.
        <ToggleBar list={['친구', '메세지', '요청']} selectedIdx={toggleIdx}
        onclick={onclick} />
    </>
}

export default ChatListPage;