import styled from '@emotion/styled';
import Overlay from '../components/commons/Overlay';
import theme from '../styles/theme';

const AuthModal = () => {
  return (
    <>
      <Modal>
        <Exit src="/icons/main_exit.svg" alt="Exit button" />
        <Content>
          <TextField placeholder="프로젝트의 제목을 입력하세요" />
          <InputImage src="/images/example.png" />
          <UploadBtn>
            <UploadIcon
              src="/icons/main_upload.svg"
              alt="Image upload Button"
            />
            이미지 업로드
          </UploadBtn>
          <ConfirmBtn>UX 체크리스트 확인하기</ConfirmBtn>
        </Content>
      </Modal>
      <Overlay />
    </>
  );
};

const Modal = styled.div`
  width: 420px;
  height: 640px;
  margin: 0 auto;
  padding: 20px;

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

const Content = styled.div`
  width: 92%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  background: none;
`;

const TextField = styled.input`
  width: 282px;
  height: 32px;
  margin-top: 12px;
  align-self: flex-start;

  font-size: 24px;
  color: ${theme.colors.gray2};

  input::placeholder {
    color: ${theme.colors.gray1};
  }
`;

const InputImage = styled.img`
  width: 160px;
  height: 300px;
  margin-top: 12px;

  object-fit: stretch;
`;

const UploadBtn = styled.div`
  width: 96px;
  height: 25px;

  display: flex;
  justify-content: space-between;

  font-size: 14px;
  color: ${theme.brand.main};

  cursor: pointer;
`;

const UploadIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const ConfirmBtn = styled.button`
  width: 288px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  color: ${theme.brand.main};
  border-radius: 6px;
  border: 1px solid ${theme.brand.main};

  cursor: pointer;
`;

export default AuthModal;
