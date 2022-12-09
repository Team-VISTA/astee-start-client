import Modal from '../../layout/Modal';
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { useContext } from 'react';
import { AuthModalContext } from '../../contexts/AuthModalContext';
import Logo from '../commons/Logo';
import { AuthContext } from '../../contexts/AuthContext';

const Auth = () => {
  const { setIsAuthModalOpen }: any = useContext(AuthModalContext);
  const { setIsLogin }: any = useContext(AuthContext);

  const closeModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleLogin = () => {
    setIsLogin(true);
    closeModal();
  };

  return (
    <Modal height="80%" marginTop="24px" closeModal={closeModal}>
      <Logo width="155px" image="40px" font="40px" />
      <Subscription>
        <Logo width="48px" image="16px" font="18px" />는 로그인 후 이용
        가능합니다
      </Subscription>
      <Image src="/images/main_astee.png" alt="main astee" />
      <AuthBtn onClick={handleLogin}>
        <GoogleIcon src="/icons/main_google.svg" alt="google icon" />
        구글로 로그인
      </AuthBtn>
    </Modal>
  );
};

const Subscription = styled.div`
  width: 228px;
  height: 32px;

  font-weight: 500;
  font-size: 14px;
  line-height: 32px;

  display: inline-flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 252px;
  height: 252px;
  margin-top: 36px;
`;

const AuthBtn = styled.button`
  width: 288px;
  height: 56px;
  padding: 0 84px 0 20px;
  margin-top: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.white};
`;

const GoogleIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default Auth;
