import React from 'react'
import './login.css'

function Signin() {

    return (
        <div className="loginForm">
            <div className="login-page">
                <div className="form">
                    <form className="register-form-2">
                        <input type="text" placeholder="Username or Email"/>
                        <input type="password" placeholder="Password"/>
                        <button>Login</button>
                        <p class="message">Not registered? <a href="/signup">Create an account</a></p>
                    </form>
                </div>
                </div>
        </div>
    )
}

export default Signin

