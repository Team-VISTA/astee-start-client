import styled from '@emotion/styled';
import Layout from '../layout/Layout';
import theme from '../styles/theme';

const Main = () => {
  return (
    <Layout>
      <Wrapper>
        <Image src="/images/main_astee.png" alt="main image" />
        <TextWrapper>
          <TextArea>
            <Subtitle>모바일 화면 사진만으로</Subtitle>
            <Text>
              실제 사용자가 없어도, 실제 서비스를 출시하지 않아도 Astee를 이용할
              수 있습니다.
            </Text>
          </TextArea>
          <TextArea>
            <Subtitle>더 나은 UIUX를 위해</Subtitle>
            <Text>
              쉽고 편리하게 화면을 분석하고 서비스에 맞는 UIUX를 찾아보세요
            </Text>
          </TextArea>
          <Button>화면 분석하기</Button>
        </TextWrapper>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 8%;
  margin-top: 12vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  margin: 0 auto;
`;

const TextWrapper = styled.div`
  height: 100%;
  margin: 0 auto;
`;

const TextArea = styled.div`
  margin-top: 52px;
`;

const Subtitle = styled.div`
  color: ${theme.brand.main};
  font-size: 32px;
  font-weight: 500;
`;

const Text = styled.div`
  width: 420px;
  margin-top: 12px;

  color: ${theme.colors.white};
  font-size: 16px;
  line-height: 1.5;
  word-break: keep-all;
`;

const Button = styled.button`
  width: 248px;
  height: 64px;
  margin-top: 64px;

  color: ${theme.brand.main};
  font-size: 20px;

  background: none;
  border-radius: 6px;
  border: 1px solid ${theme.brand.main};

  cursor: pointer;
`;

export default Main;
