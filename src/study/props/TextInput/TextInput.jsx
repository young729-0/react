function TextInput({id, text}) {

    const user = {
        username : "test",
        passward : "1234",
        name : "정현영",
    }

    const {username, name} = user;
    console.log(username);


    return <div>
        <label htmlFor={id}>{text}</label>
        <input type="text" id ={id}/>
    </div>
}


export default TextInput;