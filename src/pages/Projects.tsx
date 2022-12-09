import styled from '@emotion/styled';
import Layout from '../layout/Layout';

const Projects = () => {
  return (
    <Layout>
      <Wrapper>Projects</Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 12vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default Projects;
