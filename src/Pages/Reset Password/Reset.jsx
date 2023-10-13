import React, { useRef ,useState} from 'react'
import { Link } from 'react-router-dom'
import { ResetUser } from '../../Helper/userApi';
function Reset() {
    const email = useRef();
    const old_password = useRef();
    const new_password = useRef();
    const [err,seterr]  = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            email: email.current.value ,
            old_password: old_password.current.value ,
            new_password: new_password.current.value
        }
        try {
            const response = await ResetUser(user)
            if(response.status==200){
                window.location.href = '/'
            }
            else if (response.status==400){
                seterr('User Not found')
            }
            else if (response.status==401){
                seterr('Old Password is wrong')
            }
            else{
                console.log("Error",response.data)
            }
        } catch (error) {
            console.log("Error While Reset Password",error)
        }
      



    }
    return (
        <>

            <div >
                <h1>Reset Password</h1>
                <form action="" onSubmit={handleSubmit}  style={{ display: 'flex', flexDirection: "column", width: "30%", margin: "auto", marginTop: "20px" }}>
                    <input type="email" ref={email} style={{ margin: "20px" }} placeholder='email' required/>
                    <input type="password" ref={old_password} style={{ margin: "20px" }} placeholder='Old password'  required/>
                    <input type="password" ref={new_password} style={{ margin: "20px" }} placeholder='New password' required />
                    <input type="submit" style={{ margin: "20px" }} />
                </form>
                {err  && <p style={{color:"red" , width:"300px" , margin:"auto", background:"black" }}>{err}</p>}

                <Link to={'/register'}> Go to register </Link> <br />
                <Link to={'/'}> Go to Login </Link> <br />
            </div>


        </>
    )
}

export default Reset