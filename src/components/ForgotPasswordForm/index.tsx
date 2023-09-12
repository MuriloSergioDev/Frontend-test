import { Link } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { useLogin } from '../../hooks/useLogin';
import './index.css';

function ForgotPasswordForm() {
    const { user, error, handleEmailChange, handleSendResetPassword, goToLogin } = useLogin();

    return (
        <>
            <div className='help-container'>
                <Link to={"/help"}>Need help?</Link>
            </div>
            <div className='form-container'>
                <Form onSubmit={(e) => handleSendResetPassword(e)}>
                    <h3>Forgot your password</h3>
                    <Form.Input fluid
                        label='Email'
                        placeholder='Enter your email adress'
                        error={error.email}
                        value={user.email}
                        onChange={handleEmailChange} />
                    <button className="ui button btn-login fluid" type="submit">Request reset link</button>
                    <button className="ui button btn-back secondary basic fluid " type="button" onClick={goToLogin}>Back to login</button>
                </Form>
            </div>
        </>
    );
}

export default ForgotPasswordForm;