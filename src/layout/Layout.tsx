import styled from '@emotion/styled';
import React from 'react';
import Header from '../components/commons/Header';

const Layout = ({ children }: any) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
export default Layout;
