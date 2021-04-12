import useTest from "../store/useTest";
import {testSubject} from "../store/Store";


export default function Comp01() {
    const test = useTest(0);

    return (
      <>
          Comp01 {test}
          <br/>
          <button onClick={() => testSubject.next(test + 1)}>Increment</button>
      </>
    );
}