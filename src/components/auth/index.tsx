import Modal from '../../layout/Modal';
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { useContext } from 'react';
import { AuthModalContext } from '../../contexts/AuthModalContext';

const Auth = () => {
  const { setIsAuthModalOpen }: any = useContext(AuthModalContext);

  const closeModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <Modal closeModal={closeModal}>
      <Brand>
        <Logo src="/images/astee.svg" />
        <Astee>Astee</Astee>
      </Brand>
    </Modal>
  );
};

const Brand = styled.div`
  width: 108px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

const Astee = styled.span`
  color: ${theme.brand.main};
  font-size: 28px;
`;

export default Auth;
