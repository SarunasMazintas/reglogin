import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = ({ users, setUserLoggedIn }) => {

  const usernameRef = useRef();
  const passwordRef = useRef();
  const [loginError, setLoginError] = useState();

  const nav = useNavigate();

  function login(user) {
    console.log(user)
    let loggedUser;
    if (user?.username) {
      loggedUser = user;
      setUserLoggedIn(user);
    } else {
      loggedUser = users.find(user => usernameRef.current.value === user.username && passwordRef.current.value === user.password);
      setUserLoggedIn(loggedUser);
      setLoginError(loggedUser ? '' : 'Bad username or password!')
    }
    loggedUser && nav('/profile');
  }

  return (
    <div className='login-page'>
      <div className="form-control">
        <label htmlFor="username"> Username: </label>
        <input type="text" id='username' defaultValue='Petras' ref={usernameRef} />
      </div>
      <div className="form-control">
        <label htmlFor="password"> Password: </label>
        <input type="text" id='password' defaultValue='petras1' ref={passwordRef} />
      </div>
      <div className="error-message">{loginError}</div>

      <button onClick={login}>Login</button>

      <div className="login-helper">
        Or you can login to these accounts below for test purposes.
        Login as:

        {users && users.map(user => <button key={user.username} onClick={() => login(user)}>{user.username}
          <img src={user.image} alt="" /></button>)}
      </div>
    </div>
  )
}
