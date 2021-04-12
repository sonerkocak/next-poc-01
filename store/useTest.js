import {testSubject} from './Store';
import useSubject from "./useSubject";

export default function useTest(initialValue) {

    const data = useSubject(testSubject, initialValue);

    return data;
}

