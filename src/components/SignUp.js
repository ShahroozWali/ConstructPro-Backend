import React, { useState } from 'react'
import './login.css'

const SignUp = () => {

    const userInfoObject = {
        name: '',
        email: '',
        phoneNo: '',
        password: '',
        confirmPassword: ''
    }

    const [userInfo, setUserInfo] = useState(userInfoObject)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        if (userInfo.name && userInfo.email && userInfo.phoneNo && userInfo.password && userInfo.confirmPassword) {
            fetch('http://localhost:5000/users/addUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: userInfo.name,
                    email: userInfo.email,
                    phoneNo: userInfo.phoneNo,
                    password: userInfo.password,
                    confirmPassword: userInfo.confirmPassword
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error) {
                        console.log(data);
                    } else if (data.message) {
                        setUserInfo(userInfoObject)
                    }
                });
        }
    }

    return (
        <div className="loginForm">
            <div className="login-page">
                <div className="form">
                    <form className="register-form-2" onSubmit={handleSubmitForm}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={userInfo.name}
                            onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={userInfo.email}
                            onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={userInfo.phoneNo}
                            onChange={e => setUserInfo({ ...userInfo, phoneNo: e.target.value })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={userInfo.password}
                            onChange={e => setUserInfo({ ...userInfo, password: e.target.value })}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={userInfo.confirmPassword}
                            onChange={e => setUserInfo({ ...userInfo, confirmPassword: e.target.value })}
                        />
                        <button type="submit">create</button>
                        <p className="message">Already registered? <a href="/login">Log In</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp

