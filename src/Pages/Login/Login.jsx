import React, { useRef ,useState} from 'react'
import { Link } from 'react-router-dom'
import { LoginUser } from '../../Helper/userApi';
import { useNavigate } from 'react-router-dom';
function Login() {

    const email = useRef();
    const password = useRef();
    const [err,seterr] = useState(null)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            email: email.current.value,
            password: password.current.value
        }
        try {
            const response = await LoginUser(user)
            console.log(response)
            if (response.status === 200) {
                // Successful login, set the token in localStorage
                localStorage.setItem('token', response.data.token);
        
                // Redirect to the dashboard or any other page
                window.location.href = '/dashboard';
              }
              else if(response.status == 400){
                seterr('User Not Found')
                setTimeout(() => {
                    seterr(null)
                }, 3000);
              }
              else if(response.status == 401){
                seterr('Password is Wrong')
                setTimeout(() => {
                    seterr(null)
                }, 3000);
              }
              else {
                // Handle other status codes (e.g., 401 for unauthorized)
                console.error(`Login failed with status code: ${response.status}`);
              }
        
    
        } catch (error) {
            console.log("Error in login",error)
        }
    

    }


    return (
        <>
            <div >
                <h1>Login</h1>
                <form onSubmit={handleSubmit}  action="" style={{ display: 'flex', flexDirection: "column", width: "30%", margin: "auto", marginTop: "20px" }}>
                    <input type="email" ref={email} style={{ margin: "20px" }} placeholder='email' required />
                    <input type="password" ref={password} style={{ margin: "20px" }} placeholder='password' required />
                    <input type="submit" style={{ margin: "20px" }} />
                </form>
                {err  && <p style={{color:"red" , width:"300px" , margin:"auto", background:"black" }}>{err}</p>}

                <Link to={'/register'}> Go to register </Link> <br />
                <Link to={'/reset'}> Reset Password</Link> <br />
                <Link to={'/forget'}> Forget Password</Link> <br />
                <Link to={'/email-for-verification'}> Verify User</Link>
                
            </div>
        </>
    )
}

export default Login