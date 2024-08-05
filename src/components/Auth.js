import React, { useState } from 'react';
import Login from './login';
import SignUp from './signup';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div id="login" className="auth-container">
      {isLogin ? (
        <div>
          <Login toggleAuth={toggleAuth} />
          <div className="text">
          </div>
        </div>
      ) : (
        <div>
          <SignUp toggleAuth={toggleAuth} />
          <div className="text">
          </div>
        </div>
      )}
    </div>
  );
}

export default Auth;
