import styled from '@emotion/styled';
import theme from '../../styles/theme';

const Header = () => {
  return (
    <Wrapper>
      <Brand>
        <Logo src="/images/astee.svg" />
        <Astee>Astee</Astee>
      </Brand>
      <User>
        <Span>로그인</Span>
        <Border />
        <Span>회원가입</Span>
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

const Astee = styled.label`
  color: ${theme.brand.main};
  font-size: 28px;
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
