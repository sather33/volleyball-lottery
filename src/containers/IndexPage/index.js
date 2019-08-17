import { useState } from 'react';
import styled from 'styled-components';
import NextSeo from 'next-seo';
import {
  InputGroup, InputGroupAddon, Input, Form, Button,
} from 'reactstrap';
import { GridWrapper, Grid, Col } from '@sorosora/grid';
import TicketWall from 'components/TicketWall';

const Title = styled.div`
  width: 100%;
  ${({ theme }) => theme.font.face('title').align('center').weight('700').css()};
`;
const Item = styled.div`
  display: flex;
  padding: 0 5px;
`;
const Block = styled.div`
  padding: 20px;
  border-radius: 10px;
`;
const MaleBlock = styled(Block)`
  background-color: ${({ theme }) => theme.color.skyBlue};
`;
const FemaleBlock = styled(Block)`
  background-color: ${({ theme }) => theme.color.pink};
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const TicketWrapper = styled.div``;
const Container = styled.div`
  padding: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 25px 5px hsla(0, 0%, 0%, 0.2);

  ${InputWrapper} {
    margin-top: 20px;
  }

  ${TicketWrapper} {
    margin-top: 30px;
  }
`;
const Wrapper = styled.div`
  padding-top: 50px;
`;

const generateTicket = (maleNumber, femaleNumber) => {
  const signing = [...Array(maleNumber + femaleNumber)].map((item, index) => {
    if (index % 3 === 0) { return 'A'; }
    if (index % 3 === 1) { return 'B'; }
    return 'C';
  });
  return ({
    male: signing,
    female: signing.splice(maleNumber),
  });
};

const IndexPage = () => {
  const [maleList, setMaleList] = useState([]);
  const [femaleList, setFemaleList] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    event.persist();
    const maleNumber = parseInt(event.target.male.value, 10);
    const femaleNumber = parseInt(event.target.female.value, 10);
    const ticket = generateTicket(maleNumber, femaleNumber);
    setMaleList(ticket.male);
    setFemaleList(ticket.female);
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
                  <InputWrapper>
                    <Item>
                      <InputGroupAddon addonType='prepend'>男</InputGroupAddon>
                      <Input placeholder='輸入數字' type='number' name='male' />
                    </Item>
                    <Item>
                      <InputGroupAddon addonType='prepend'>女</InputGroupAddon>
                      <Input placeholder='輸入數字' type='number' name='female' />
                    </Item>
                  </InputWrapper>
                </InputGroup>
                <InputWrapper>
                  <Item>
                    <Button>開始抽籤</Button>
                  </Item>
                </InputWrapper>
              </Form>
              <TicketWrapper>
                <Grid verticalGutter={['20px']}>
                  <Col width={[1 / 2, 1]}>
                    <MaleBlock>
                      <TicketWall list={maleList} cardColor='#2B5F75' />
                    </MaleBlock>
                  </Col>
                  <Col width={[1 / 2, 1]}>
                    <FemaleBlock>
                      <TicketWall list={femaleList} cardColor='#DB4D6D' />
                    </FemaleBlock>
                  </Col>
                </Grid>
              </TicketWrapper>
            </Container>
          </Col>
        </Grid>
      </GridWrapper>
    </Wrapper>
  );
};

export default IndexPage;
