import {useEffect} from 'react';
import Router from "next/router";

export default function Test3() {

    useEffect(() => {
        Router.push("/test");
    }, []);

    return (
      <>
          Test3
      </>
    );
}

export async function getServerSideProps(context) {
    console.log('Test3.getServerSideProps', context.resolvedUrl);
    return { props: {} };
}
