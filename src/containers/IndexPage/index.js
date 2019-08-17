import styled from 'styled-components';
import NextSeo from 'next-seo';
import {
  InputGroup, InputGroupAddon, Input, Form, Button,
} from 'reactstrap';
import { GridWrapper, Grid, Col } from '@sorosora/grid';

const Title = styled.div`
  width: 100%;
  ${({ theme }) => theme.font.face('title').align('center').weight('700').css()};
`;
const Item = styled.div`
  display: flex;
  padding: 0 5px;
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

const IndexPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.persist();
    console.log('male', event.target.male.value);
    console.log('female', event.target.female.value);
  };
  return (
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
              <Form onSubmit={e => handleSubmit(e)}>
                <InputGroup>
                  <Item>
                    <InputGroupAddon addonType='prepend'>男</InputGroupAddon>
                    <Input placeholder='輸入數字' type='number' name='male' />
                  </Item>
                  <Item>
                    <InputGroupAddon addonType='prepend'>女</InputGroupAddon>
                    <Input placeholder='輸入數字' type='number' name='female' />
                  </Item>
                  <Item>
                    <Button>開始抽籤</Button>
                  </Item>
                </InputGroup>
              </Form>
            </Container>
          </Col>
        </Grid>
      </GridWrapper>
    </Wrapper>
  );
};

export default IndexPage;
