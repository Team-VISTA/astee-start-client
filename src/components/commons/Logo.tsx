import styled from '@emotion/styled';
import theme from '../../styles/theme';

const Logo = ({ width, image, font }: any) => {
  return (
    <Brand width={width}>
      <LogoImage src="/images/astee.svg" image={image} />
      <Astee font={font}>Astee</Astee>
    </Brand>
  );
};

const Brand = styled.div<any>`
  width: ${({ width }) => width}; //108px

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImage = styled.img<any>`
  width: ${({ image }) => image}; //32px
  width: ${({ image }) => image};
`;

const Astee = styled.span<any>`
  color: ${theme.brand.main};
  font-size: ${({ font }) => font}; //28px
`;

export default Logo;
