import React, { useState } from 'react';

function App4(props) {
    const [userInfo, setUserInfo] = useState({ // 초기값 설정을 이렇게 객체화로 여러개를 줄 수 있음
        name: "",
        gender: "",
    });

    const [inputValue, setInputValue] = useState({
        name: "",
        gender: "male",
    });


    const handleInputOnChange = (e) => { 
        // const name = e.target.name
        // const value = e.target.value
        const {name, value} = e.target; // 입력 될때마다 그 위치의 e의 value를 가져옴

        setInputValue({ // setter로 inputValue의 속성들을 최신화
            ...inputValue,
            [name]: value, 
            // name이 "name"이면 inputValue.name에 값을 할당
            // name이 "gender"이면 inputValue.gender에 값을 할당
        }); 
    }

    const handleOkOnClick = () => { // 버튼 클릭시 userInfo와 inputValue를 초기화
        setUserInfo({ // setter로 userInfo의 속성들을 최신화 (밑에 출력을 userInfo로 하니까)
            name: inputValue.name,
            gender: inputValue.gender === "male" ? "남" : "여",
        });
        setInputValue({ // 확인 버튼을 누르고 input칸을 공백으로 비움
            ...inputValue,
            name: "",
        });
    }

    return (
        <div>
            <h1>이름: {userInfo.name}({userInfo.gender})</h1>
            <input type="text" name="name" onChange={handleInputOnChange} value={inputValue.name} />
            
            <input type="radio" id="male" name="gender" onChange={handleInputOnChange} checked={inputValue.gender === "male"} value={"male"} />
            <label htmlFor="male">남</label>
            
            <input type="radio" id="female" name="gender" onChange={handleInputOnChange} checked={inputValue.gender === "female"} value={"female"} />
            <label htmlFor="female">여</label>
            
            <button onClick={handleOkOnClick}>확인</button>
        </div>
    );
}

export default App4;
