import styled from '@emotion/styled';
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
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export default Layout;
