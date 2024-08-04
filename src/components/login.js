import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    // const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Both fields are required');
            return;
        }
        // Handle login logic here (e.g., API call)
        setSuccess('Logged in successfully!');
        setError('');
    };

    // const goToSignUp = () => {
    //     navigate('/signup'); // Navigate to SignUp page
    // };

    return (
        <div id="login" className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="login-email">Email</label>
                    <input
                        type="email"
                        id="login-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="login-password">Password</label>
                    <input
                        type="password"
                        id="login-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <button type="submit">Login</button>
            </form>
            {/* <div className="text">
                Don't have an account? <button onClick={goToSignUp}>Sign Up</button>
            </div> */}
        </div>
    );
}

export default Login;
