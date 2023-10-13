import React,{useRef , useState  , useNavigate} from 'react'
import { forgetPassword } from '../../Helper/userApi';
import {Link}  from 'react-router-dom'
function ForgetPassword() {
    const email = useRef();
    const [message,setMessage] = useState(null)
    const [err,seterr]  = useState(null)
    const currentURL = window.location.href;
    const url = new URL(currentURL);
    const baseUrl = `${url.origin}`;
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const user = {  
            email:email.current.value,
            base_url:baseUrl
        }
    try {
        const response = await forgetPassword(user)
        console.log(response.status)
        if(response.status==200){
            setMessage(`Email Sent to ${email.current.value}`)
            setTimeout(() => {
                setMessage(null)
            }, 3000);
        }
        else if(response.status ==  401){
            setMessage('User Not Found')
            setTimeout(() => {
                setMessage(null)
            }, 3000);
        }
        else{
            
        }
    } catch (error) {
        console.log("Error in forget password email sending")
    }
    }
    return (
        <>
            <h1>Forget Password </h1>

            <form action=""  onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: "column", width: "30%", margin: "auto", marginTop: "20px" }}>
                <input type="email" ref={email} style={{ margin: "20px" }} placeholder='Enter Email'  required/>
                <input type="submit" value={"Get Token on Email"} style={{ margin: "20px" }} required />
            </form>
           {message && <p style={{color:"white",background:"black" ,padding:"3px",width:"300px",margin:"auto",borderRadius:"5px"}}>{message}</p>}
           <Link to={'/'}>Go Back</Link>
        </>
    )
}

export default ForgetPassword