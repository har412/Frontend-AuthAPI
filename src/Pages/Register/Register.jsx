import React ,{ useRef, useState } from 'react'
import { RegisterUser } from '../../Helper/userApi';
import { Link } from 'react-router-dom'
function Register() {
    const email = useRef();
    const password = useRef();
    const [err,seterr] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            email: email.current.value,
            password: password.current.value
        }
        const response = await RegisterUser(user)
        console.log(response.status)
        if (response?.status == 200) {
            window.location.href = '/';
          }
          else if(response?.status == 409){
            seterr('User Already Present !')
            setTimeout(() => {
                seterr(null)
            }, 3000);
          } else {
            console.error(`Register failed with status code: ${response?.status}`);
          }

    }
    return (
        <div >
            <h1>Register</h1>
            <form action="" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: "column", width: "30%", margin: "auto", marginTop: "20px" }}>
                <input type="email" ref={email} style={{ margin: "20px" }} placeholder='email' required />
                <input type="password" ref={password} style={{ margin: "20px" }} placeholder='password' required />
                <input type="submit" style={{ margin: "20px" }} />
            </form>
            {err  && <p style={{color:"red" , width:"300px" , margin:"auto", background:"black" }}>{err}</p>}
            <Link to={'/'}> Go to Login </Link> <br />
            <Link to={'/email-for-verification'}> Verify User</Link>

        </div>
    )
}

export default Register