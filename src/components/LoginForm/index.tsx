import { Link } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { useLogin } from '../../hooks/useLogin';

import './index.css';

const LoginForm = () => {

  const { user, error, handleEmailChange, handlePasswordChange, handleLogin } = useLogin()

  return (
    <>
      <div className='help-container'>
        <Link to={"/help"}>Need help?</Link>
      </div>
      <div className='form-container'>
        <Form onSubmit={(e) => handleLogin(e)}>
          <h4>Log in</h4>

          <Form.Input fluid
            label='Email'
            placeholder='joe@email.com'
            error={error.email}
            value={user.email}
            onChange={handleEmailChange} />

          <Form.Input fluid
            label='Password'
            type='password'
            placeholder='Enter your Password'
            error={error.password}
            value={user.password}
            onChange={handlePasswordChange} />

          <div className="container-password">
            <Link to={"/forgot-password"}>forgot password?</Link>
          </div>
          <button className="ui button btn-login fluid" type="submit">Login</button>
        </Form>
      </div>
    </>
  )
}

export default LoginForm