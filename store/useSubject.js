import {useEffect, useState} from "react";

export default function useSubject(subject, initialValue) {

    const [data, setData] = useState(initialValue);

    useEffect(() => {
        const subscription = subject.subscribe(value => setData(value) );
        return () => subscription.unsubscribe();
    }, []);

    return data;
}
