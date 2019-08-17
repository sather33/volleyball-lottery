import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid, Col } from '@sorosora/grid';
import Card from './Item';

const Wrapper = styled.div`
  ${Card.First} {
    background-color: ${({ cardColor }) => cardColor};
  }
`;

const TicketWall = (props) => {
  const { list, ...otherProps } = props;
  return (
    <Wrapper {...otherProps}>
      <Grid verticalGutter={['20px']}>
        {list.map((item, index) => {
          const generateKey = `${item}_${index}`;
          return (
            <Col width={[1 / 4]} key={generateKey}>
              <Card letter={item} />
            </Col>
          );
        })}
      </Grid>
    </Wrapper>
  );
};

TicketWall.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
  cardColor: PropTypes.string,
};

TicketWall.defaultProps = {
  cardColor: undefined,
};

export default TicketWall;
