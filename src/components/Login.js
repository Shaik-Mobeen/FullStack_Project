import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear()
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8000/users/" + username).then((res) => {
            return res.json();
        }).then((resp) => {
            // console.log(resp)
            if (Object.keys(resp).length === 0) {
                alert("Please Enter Valid Username")
            }
            else {
                if (resp.password === password) {
                    sessionStorage.setItem('username', username);
                    navigate('/')
                } else {
                    alert("Please Enter Valid Credentials")
                }
            }
        }).catch((err) => {
            alert("Login Failed due to : " + err.message)
        })
    };

    return (<div className="Body">
        <form className="form" onSubmit={handleSubmit}>
            <p className="form-title">Log in to your account</p>
            <div className="input-container">
                <input placeholder="Enter User Name" type="Text" id="Text" onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="input-container">
                <input placeholder="Enter password" type="password" id="Password" onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button className="submit" type="submit">Log in</button>

            <p className="signup-link">
                Not a member?
                <Link to="/Signup">Register</Link>
            </p>
        </form>

    </div>);
}

export default Login;