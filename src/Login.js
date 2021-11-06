import React from 'react'
import {useHistory} from 'react-router-dom'
function Login() {
    
    const history = useHistory();

    const handleRedirect = ()=>{
        history.push('./profile');
    }

    return (
        <div>
          <button onClick={handleRedirect}>Login</button>  
        </div>
    )
}

export default Login
//rcredux
