import { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import { Normalize } from 'styled-normalize';
import Header from 'components/Header';
import Footer from 'components/Footer';
import appTheme from './theme';
import GlobalStyle from './GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainWrapper = styled.div``;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: ${({ theme }) => theme.font.family.primary};
  background-color: ${({ theme }) => theme.color.blue};
  
  ${MainWrapper} {
    flex: 1 1 auto;
  }
  
  ${Footer} {
    margin-top: auto;
  }
`;

const Layout = (props) => {
  useEffect(() => {
    Router.events.on('routeChangeStart', NProgress.start);
    Router.events.on('routeChangeComplete', NProgress.done);
    Router.events.on('routeChangeError', NProgress.done);
    return () => {
      Router.events.off('routeChangeStart', NProgress.start);
      Router.events.off('routeChangeComplete', NProgress.done);
      Router.events.off('routeChangeError', NProgress.done);
    };
  }, []);

  const { children } = props;
  return (
    <ThemeProvider theme={appTheme}>
      <AppWrapper>
        <Normalize />
        <GlobalStyle />
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=3.0' />
          <meta name='theme-color' content='#000000' />
          {/* <link href='https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,500&amp;subset=chinese-traditional' rel='stylesheet' /> */}
          {/* <link rel='icon' href='/static/images/logo/logo-favicon.png' /> */}
        </Head>
        <Header />
        <MainWrapper>
          {children}
        </MainWrapper>
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
