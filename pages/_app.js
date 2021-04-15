import Router from "next/router";
import ReactDOM from "react-dom";
import 'styles/globals.css';
import {delay} from '../common-util';
import Link from 'next/link';

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
      <h1>{`Start ${url}`}</h1>,
      document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

function MyApp({ Component, pageProps }) {
  return (
      <>
        <h1>MENU</h1>
        <Link href="/test"><a>Test</a></Link>
        <Link href="/test2"><a>Test 2</a></Link>
        <Link href="/test3"><a>Test 3</a></Link>
        <br/>
        <Component {...pageProps} />
      </>
  );
}

MyApp.getInitialProps = async (context) => {
    console.log('MyApp.getInitialProps', context.ctx.pathname);
    console.log('MyApp.getInitialProps', context.ctx.query);
  //await delay(3000);
  return {
    props: {},
  };
};

export default MyApp;
