import styled from 'styled-components';
import NextSeo from 'next-seo';
import { GridWrapper } from '@sorosora/grid';

const IndexPageWrapper = styled.div`
  ${({ theme }) => theme.font.face('title')
    .weight('bold')
    .color('cornflowerblue', true)
    .css()};
`;

const IndexPage = () => (
  <IndexPageWrapper>
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
      lottery with Next.js
    </GridWrapper>
  </IndexPageWrapper>
);

export default IndexPage;
