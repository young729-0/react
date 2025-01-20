import { useState } from "react";


/**
 * useState 상태관리
 */



function App2() {
    const [ num, setNum ] = useState(0); // 함수호출
    // 구조분해 하지 않은 경우
    // const numState = useState(0);
    // const num = numState[0];
    // const setNum = numState[1];

    let number = 0; //화면이 바뀌지 않아도 되면 이것 사용

    console.log(num);
    console.log(number);

    const handleIncreaseOnClick = () => {
       setNum(num+1); 
    }

    const handleDecreaseOnClick = () => {
        setNum(num-1);
    }

return <>
    <h1>{num}</h1>
    <button onClick={handleIncreaseOnClick}>1증가</button>
    <button onClick={handleDecreaseOnClick}>1감소</button>
</>
}

export default App2;