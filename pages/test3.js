import {useEffect} from 'react';
import {useRouter} from "next/router";

export default function Test3() {
    const router = useRouter();

    useEffect(() => {
        router.push("/test");
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
