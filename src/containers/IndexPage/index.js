import styled from 'styled-components';
import NextSeo from 'next-seo';
import { GridWrapper, Grid, Col } from '@sorosora/grid';

const Title = styled.div`
  width: 100%;
  ${({ theme }) => theme.font.face('title').align('center').weight('700').css()};
`;
const Container = styled.div`
  padding: 20px;
  height: 400px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 25px 5px hsla(0, 0%, 0%, 0.2);
`;
const Wrapper = styled.div`
  padding-top: 50px;
`;

const IndexPage = () => (
  <Wrapper>
    <NextSeo
      config={{
        title: 'lottery',
        titleTemplate: 'lottery',
        openGraph: {
          title: 'lottery',
        },
      }}
    />
    <GridWrapper>
      <Grid>
        <Col width={[12 / 12]} offset={[0]}>
          <Container>
            <Title>清水女網抽籤</Title>
          </Container>
        </Col>
      </Grid>
    </GridWrapper>
  </Wrapper>
);

export default IndexPage;
