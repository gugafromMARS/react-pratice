import { useState } from "react"



const Login = () => {
    
    const [isLoggedIn, setLoggedIn] = useState(false);

    let message;


    function doLogging(){
        setLoggedIn(true);
    }

    if(isLoggedIn){
        message = <p>Welcome User</p>
    } else {
        message = <p>Please Login!</p>
    }

    return (
        <div>
            {message}
            <button onClick={doLogging}>Login</button>
        </div>
    )
}

export default Login;