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
