import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../images/person.png'
import email_icon from '../images/email.png'
import password_icon from '../images/password.png'
import { ControlPointDuplicate } from '@mui/icons-material'
import Admin from "../users/Admin"

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");

    return (
        <div className='loginsignup'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">

                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name' />
                </div>


                {action === "Login" ? <div></div> :
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email ' />
                    </div>
                }
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>

            {action === "Sign Up" ? <div></div> :
                <div className="forgot-password">Lost Password ? <span> Click Here !</span></div>
            }

            {action === "Login" ? <div></div> :
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                    <label className="form-check-label" for="form1Example3"> Remember me </label>
                </div>
            }

            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><hr />
            <Admin />
        </div>

    )
}

export default LoginSignup
