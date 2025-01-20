import React, { useState } from 'react';
import Signin from './components/sign/signin/Signin';
import Signup from './components/sign/signup/Signup';

function App6(props) {
    
    const [ path, setpeth ] = useState("signin");
    const [ userList, setUserList ] = useState([]);

    const handleChangeLoadButtonOnClick = (e, path) => {
        setpeth(path);
    };



    return (
        <div>
            <button onClick={(e) => handleChangeLoadButtonOnClick(e, "signin")}>로그인</button>
            <button onClick={(e) => handleChangeLoadButtonOnClick(e, "signup")}>회원가입</button>  
            {
                path === "signin" && <Signin userList={userList}/>
            }
            {
                path === "signup" && <Signup userList={userList} setUserList={setUserList}/>
            }
            
        </div>
              
    );
}

export default App6;
