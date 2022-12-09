import styled from '@emotion/styled';
import { useContext } from 'react';
import { UploadModalContext } from '../../contexts/UploadModalContext';
import Modal from '../../layout/Modal';
import theme from '../../styles/theme';

const Upload = () => {
  const { setIsUploadModalOpen }: any = useContext(UploadModalContext);

  const closeModal = () => {
    setIsUploadModalOpen(false);
  };

  return (
    <Modal closeModal={closeModal}>
      <TextField placeholder="프로젝트의 제목을 입력하세요" autoFocus />
      <InputImage src="/images/example.png" />
      <UploadBtn>
        <UploadIcon src="/icons/main_upload.svg" alt="Image upload Button" />
        이미지 업로드
      </UploadBtn>
      <ConfirmBtn>UX 체크리스트 확인하기</ConfirmBtn>
    </Modal>
  );
};

const TextField = styled.input`
  width: 300px;
  height: 32px;
  margin-top: 12px;
  margin-left: 12px;
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

export default Upload;
