import React, {useState} from 'react';
import styled from "styled-components";

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

const ToggleBar = ({list, selectedIdx, onclick}) => {
    return <ToggleDiv>
        { list.map((item, idx) => <ToggleItem
            key={item}
            selected={idx == selectedIdx}
            onClick={ () => onclick(idx) } >
                {item}
            </ToggleItem>) }
    </ToggleDiv>
}

const ToggleDiv = styled.div`
    margin-left: 20px;
    margin-right: 20px;

    display: flex;
    flex-direction: horizontal;
    align-items: center;
    gap: 3px;
    padding: 5px;

    background-color: #FFFFFF;
    height: 52px;
    border-radius: calc(52px / 2);
`;

const ToggleItem = styled.button`
    flex: 1 1 0;
    color: ${(props) => props.selected ? '#FFFFFF' : '#FF6B6B'};
    background-color: ${(props) => props.selected ? '#FF6B6B' : 'transparent'};
    
    height: 42px;
    border-radius: calc(42px / 2);
`;

export default ChatListPage;