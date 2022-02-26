import '../styles/globals.css';
import Router from 'next/router';
import { parseCookies } from 'nookies';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // let pageProps = {}
  // const jwt = parseCookies(ctx).jwt

  // const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  // const navigation = await res.json()

  // if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  // }
  const jwt = parseCookies(ctx).jwt;
  console.log(jwt);
  // if (typeof window !== "undefined") {
  //   const token = localStorage.getItem("jwt")
  //   // localStorage.setItem(key, value)

  // }

  const blockedPathIfLoggedIn = ['/login', '/register'];
  const blockedPathIfNotLoggedIn = ['/', '/logout', '/profile'];
  if (blockedPathIfLoggedIn.find((path) => path === ctx.pathname) && jwt) {
    // console.log("enter blocked")
    redirectUser(ctx, '/');
  }
  if (blockedPathIfNotLoggedIn.find((path) => path === ctx.pathname) && !jwt) {
    // console.log("enter blocked")
    redirectUser(ctx, '/login');
  }
  if (false) {
    if (ctx.pathname != '/login' && ctx.pathname != '/logout') {
    }
  }

  // return {
  //     pageProps,
  //     navigation
  // }
  return {};
};

export default MyApp;
