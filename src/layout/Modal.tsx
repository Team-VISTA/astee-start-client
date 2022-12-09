import styled from '@emotion/styled';
import Overlay from '../components/commons/Overlay';
import theme from '../styles/theme';

const Modal = ({ children, height, marginTop, closeModal }: any) => {
  // 90% 12px
  return (
    <>
      <Wrapper>
        <Exit
          src="/icons/main_exit.svg"
          alt="Exit button"
          onClick={closeModal}
        />
        <Content height={height} marginTop={marginTop}>
          {children}
        </Content>
      </Wrapper>
      <Overlay />
    </>
  );
};

const Wrapper = styled.div`
  width: 420px;
  height: 640px;
  padding: 20px;
  margin: 0 auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 6px;
  background: ${theme.colors.gray0};

  z-index: 3;
`;

const Exit = styled.img`
  width: 32px;
  height: 32px;
  background: none;
  align-self: flex-end;

  cursor: pointer;
`;

const Content = styled.div<any>`
  width: 92%;
  height: ${({ height }) => height};
  margin-top: ${({ marginTop }) => marginTop};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export default Modal;
