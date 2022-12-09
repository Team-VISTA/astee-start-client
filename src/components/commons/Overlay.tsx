import styled from '@emotion/styled';

const Overlay = () => {
  return <Wrapper />;
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;

  z-index: 2;
  background: rgba(0, 0, 0, 0.65);
`;

export default Overlay;
