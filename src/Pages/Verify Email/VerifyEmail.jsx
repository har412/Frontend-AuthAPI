import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ResetUserWithToken, VerifyUser } from '../../Helper/userApi';


function VerifyEmail() {


    const token = useRef();
    const [err, seterr] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const searchParams = new URLSearchParams(window.location.search);

        const email = searchParams.get('email');
        console.log(email)
        const user = {
            email: email,
            token: token.current.value,
        }
        try {
            const response = await VerifyUser(user)
            if (response.status == 200) {
                window.location.href = '/'
            }
            else if (response.status == 401) {
                seterr('Wrong Token')
            }
            else if (response.status == 400) {
                seterr('User not Found')
            }
            else if (response.status == 402) {
                seterr('Token Expired')
            }
            else {
                console.log("Error", response.data)
            }
        } catch (error) {
            console.log("Error While Reset Password", error)
        }
    }


    return (
        <div >
            <h1>Reset Password By Verifying Email</h1>
            <h2>Enter Token Below</h2>
            <form action="" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: "column", width: "30%", margin: "auto", marginTop: "20px" }}>
                <input type="token" ref={token} style={{ margin: "20px" }} placeholder='Enter token' required />
              
                <input type="submit" Value={'Verify Email'} style={{ margin: "20px" }} />
            </form>
            {err && <p style={{ color: "red", width: "300px", margin: "auto", background: "black" }}>{err}</p>}
            <Link to={'/forget'}> Go back </Link> <br />
        </div>
    )
}

export default VerifyEmail