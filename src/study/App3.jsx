import React, { useState } from 'react';

function App3(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("")
    const [nameInputText, setNameInputText] = useState(""); 
    const [genderCheckedId, setGenderCheckedId] = useState("");

    console.log(nameInputText);

    const handleNameInputOnChange = (e) => {
        setNameInputText(e.target.value);
        
    }

    const handleokonclick = () => {
        setName(nameInputText);
        setNameInputText("");
        setGender(genderCheckedId === "male" ? "남" : "여");
    }
    
    const handleGenderOnChange = (e) => {
        setGenderCheckedId(e.target.id);


    }
    return (
        <div>
            <h1>이름: {name}({gender})</h1>
            <input type="text" onChange={handleNameInputOnChange} value={nameInputText} /> 

            <input type="radio" id="male" name="gender" onChange={handleGenderOnChange} checked={genderCheckedId==="male"} value={"남"} />
            <label htmlFor="male">남</label>

            <input type="radio" id="female" name="gender" onChange={handleGenderOnChange} checked={genderCheckedId==="female"} value={"여"} />
            <label htmlFor="female">여</label>

            <button onClick={handleokonclick} >확인</button>
            
        </div>
    );
}

export default App3;


//인풋 사용시 무조건 벨류값 기재