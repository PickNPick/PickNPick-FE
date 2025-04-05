import React, { useState } from 'react';
import styled from 'styled-components';
import { Search } from 'lucide-react';

const EmailSearchBar = ({ onSearch }) => {
  const [email, setEmail] = useState('');

  const handleSearch = () => {
    if (onSearch && email.trim()) {
      onSearch(email.trim());
    }
  };

  return (
    <SearchBarWrapper>
      <StyledInput
        placeholder="이메일로 친구 검색하기"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
      />
      <SearchButton onClick={handleSearch}>
        <Search color="white" size={24} />
      </SearchButton>
    </SearchBarWrapper>
  );
};

export default EmailSearchBar;


const SearchBarWrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  display: flex;
  flex-direction: horizontal;
  align-items: center;
  gap: 3px;
  padding: 0px 10px 0px 20px;

  background-color: #FFFFFF;
  height: 52px;
  border-radius: calc(52px / 2);
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;

  font-family: 'Pretendard-Regular'; 
  font-size: 16px;
  font-weight: bold;
  color: #f4a9a9;

  &::placeholder {
    font-family: 'Pretendard-Regular'; 
    font-size: 16px;
    color: #f4a9a9;
    opacity: 1;
  }
`;

const SearchButton = styled.button`
  background-color: #FF5A6D;
  border: none;
  border-radius: 50%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
