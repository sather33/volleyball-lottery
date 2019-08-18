import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RatioBox } from 'shared-components';

const InsideCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const First = styled(InsideCard)`
  transform: rotate3d(0, 1, 0, 180deg);
  ${({ theme }) => theme.font.face().size('40').weight('500').align('center')
    .color('white')
    .css()};
  
  ${({ theme }) => theme.media.phone} {
    ${({ theme }) => theme.font.face().size('32').css()};
  }
`;
const Second = styled(InsideCard)`
  ${({ theme }) => theme.font.face().size('60').weight('500').align('center')
    .css()};
  color: ${({ theme, letter }) => (letter === 'A' ? theme.color.yellow : null)};
  color: ${({ theme, letter }) => (letter === 'B' ? theme.color.red : null)};
  color: ${({ theme, letter }) => (letter === 'C' ? theme.color.green : null)};
`;
const Text = styled.div`
  position: relative;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  transform: rotate3d(0, 1, 0, -180deg);
  overflow: hidden;
  animation: ${({ isClick }) => (isClick ? 'flip-right 0.6s cubic-bezier(.25,.46,.45,.94) both' : null)};
  
  @keyframes flip-right {
    0% {
      transform: rotate3d(0, 1, 0, -180deg);
    }
    100% {
      transform: rotate3d(0, 1, 0, 0deg);
    }
  }

  ${InsideCard} {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  ${First} {
    opacity: ${({ isClick }) => (isClick ? 0 : 1)};
    transition: opacity 0s 0.3s;
  }

  ${Second} {
    opacity: ${({ isClick }) => (isClick ? 1 : 0)};
    transition: opacity 0s 0.3s;
  }
`;
const Wrapper = styled.div`
  cursor: pointer;
  overflow: hidden;
`;
// transform: rotate3d(0, 1, 0, 70deg);

const Item = (props) => {
  const { letter, ...otherProps } = props;
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    if (!isClick) {
      setIsClick(true);
    }
  };
  return (
    <Wrapper {...otherProps} onClick={handleClick}>
      <RatioBox ratio={['1:1']}>
        <Text isClick={isClick}>
          <First>點擊</First>
          <Second letter={letter}>
            {letter}
          </Second>
        </Text>
      </RatioBox>
    </Wrapper>
  );
};

Item.propTypes = {
  letter: PropTypes.string,
};

Item.defaultProps = {
  letter: '',
};

Item.First = First;

export default Item;
