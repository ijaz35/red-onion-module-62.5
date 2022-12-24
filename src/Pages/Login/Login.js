import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../src/images/logo2.png'
import backgroundImg from '../../../src/images/signup-background.png'
import auth from '../../firebaseinit';

const Login = () => {
    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    if (loading) {
        return <h1 className='text-primary'>Loading...</h1>
    }
    if (user) {
        // console.log('user', user)
        navigate(from, { replace: true })
    }
    const handleResetPassword = async event => {
        const email = emailRef.current.value;
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Password reset email sent');
        } else {
            toast('Please enter your email');
        }

    }
    const handleLoginFormSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);

    }
    return (
        <div>
            <div className='position-relative'>
                <img className='w-100' src={backgroundImg} alt="" />
            </div>
            <div className='row w-100 position-absolute top-0'>

                <div className='col-6 mx-auto' >
                    <div className='form-logo-container w-75 mx-auto'>
                        <img className='form-logo d-block mx-auto' src={logo} alt="" />
                    </div>
                    <form onSubmit={handleLoginFormSubmit}>
                        <input className='d-block w-75 mx-auto my-4  p-3 rounded-3' ref={emailRef} type="email" name='email' placeholder='Email' required />
                        <input className='d-block w-75 mx-auto  p-3 rounded-3 ' type="password" name='password' placeholder='Password' />
                        <button onClick={handleResetPassword} className="btn btn-link text-decoration-none mt-2">Forget Password</button>
                        <input className='d-block w-75 mx-auto btn btn-danger  p-3 rounded-3 mt-4' type="submit" value='Login' />
                    </form>
                    <Link style={{ color: '#ff2b2b' }} className='text-decoration-none mt-4 d-block' to='/signup'>Create a new account
                    </Link>
                    <ToastContainer></ToastContainer>

                </div>
            </div>

        </div>
    );
};

export default Login;