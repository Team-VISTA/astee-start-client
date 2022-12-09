import styled from '@emotion/styled';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { AuthModalContext } from '../../contexts/AuthModalContext';
import theme from '../../styles/theme';
import Logo from './Logo';

const Header = () => {
  const navigate = useNavigate();
  const { isLogin, setIsLogin }: any = useContext(AuthContext);
  const { setIsAuthModalOpen }: any = useContext(AuthModalContext);

  const handleLogoutBtnClick = () => {
    setIsLogin(false);
    navigate('/');
  };

  const handleAuthBtnClick = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <Wrapper>
      <Link to="/">
        <Logo width="108px" image="32px" font="28px" />
      </Link>
      <User>
        {isLogin ? (
          <>
            <Link to="/projects">
              <Span>내 프로젝트</Span>
            </Link>
            <Border />
            <Span onClick={handleLogoutBtnClick}>로그아웃</Span>
          </>
        ) : (
          <>
            <Span onClick={handleAuthBtnClick}>로그인</Span>
            <Border />
            <Span onClick={handleAuthBtnClick}>회원가입</Span>
          </>
        )}
      </User>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 12vh;
  padding: 0 36px 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 14px;
  color: ${theme.colors.white};
`;

const Span = styled.span`
  cursor: pointer;
`;

const Border = styled.div`
  width: 1px;
  height: 15px;
  margin: 0 14px;
  background: ${theme.colors.white};
`;
