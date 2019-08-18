import { css } from 'styled-components';
import { createBreakpoints } from '@sorosora/styled-breakpoints';

const breakpoints = {
  phone: '0px',
  tablet: '768px',
  desktop: '1200px',
};

const { max } = createBreakpoints(breakpoints);

const media = {
  tablet: max('tablet'),
  phone: max('phone'),
};

const sizes = {
  tablet: 1200,
  phone: 768,
};

const grid = {
  padding: ['14px', '32px', '16px'],
  gutter: ['28px', '16px', '16px'],
  gridWidth: ['1200px'],
  ie: true,
};

const htmlFontSize = 16;

const calcFontSize = fontSize => `${fontSize / htmlFontSize}rem`;

const fontFamily = {
  primary: '\'PingFangTC\', \'微軟正黑體\', \'Microsoft JhengHei\', sans-serif',
};

const color = {
  brown: '#B9887D',
  white: '#ffffff',
  grey: 'hsla(0, 0%, 0%, 0.2)',
  blue: '#006284',
  skyBlue: '#58B2DC',
  pink: '#F4A7B9',
  yellow: '#FFB11B',
  purple: '#77428D',
  green: '#86C166',
  red: '#E83015',
  darkGreen: '#5B622E',
};

const textStyle = {
  title: css`
    font-size: ${calcFontSize(42)};
  `,
  h1: css`
    font-size: ${calcFontSize(34)};
  `,
  h2: css`
    font-size: ${calcFontSize(28)};
  `,
  h3: css`
    font-size: ${calcFontSize(22)};
  `,
  h4: css`
    font-size: ${calcFontSize(16)};
  `,
  p: css`
    font-size: ${calcFontSize(14)};
  `,
  body: css`
    font-size: ${calcFontSize(12)};
  `,
};

class Typeface {
  constructor(text) {
    this.font = textStyle[text] || css``;
  }

  set = (prop, value) => {
    this.font = this.font.concat(css`
      ${prop}: ${value};
    `);
    return this;
  };

  size = value => this.set('font-size', calcFontSize(value));

  weight = value => this.set('font-weight', value);

  color = (value, notTheme = false) => {
    if (notTheme) {
      return this.set('color', value);
    }
    return this.set('color', color[value]);
  };

  height = value => this.set('line-height', value);

  spacing = value => this.set('letter-spacing', value);

  family = value => this.set('font-family', fontFamily[value]);

  align = value => this.set('text-align', value);

  css = () => this.font;
}

const font = {
  calcSize: calcFontSize,
  family: fontFamily,
  textStyle,
  face: fontSize => new Typeface(fontSize),
};

const listStyleReset = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const theme = {
  media,
  grid,
  font,
  color,
  listStyleReset,
};

export default theme;

export { sizes };
