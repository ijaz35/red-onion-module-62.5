import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../src/images/logo2.png'
import backgroundImg from '../../../src/images/signup-background.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebaseinit';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Signup.css'


const Signup = () => {
    const emailRef = useRef('');
    const nameRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);

    if (user) {
        // console.log('user', user)

    }
    const handleSignupFormSubmit = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        // console.log(name, email, password, confirmPassword);
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            toast('Email verification sent');
            navigate('/')
        }

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
                    <form onSubmit={handleSignupFormSubmit}>
                        <input ref={nameRef} className='d-block w-75 mx-auto  p-3 rounded-3 ' type="text" name='name' placeholder='Name' />
                        <input ref={emailRef} className='d-block w-75 mx-auto my-4  p-3 rounded-3 ' type="email" name='email' placeholder='Email' required />
                        <input ref={passwordRef} className='d-block w-75 mx-auto  p-3 rounded-3 ' type="password" name='password' placeholder='Password' />
                        <input ref={confirmPasswordRef} className='d-block w-75 mx-auto my-4  p-3 rounded-3 ' type="password" name='confirmPassword' placeholder='Confirm password' />
                        <input className='d-block w-75 mx-auto btn btn-danger  p-3 rounded-3 ' type="submit" value='Sign up' />
                    </form>
                    <p>{error?.message}</p>
                    <Link style={{ color: '#ff2b2b' }} className='text-decoration-none mt-4 d-block' to='/login'>Already have an account
                    </Link>
                    <ToastContainer></ToastContainer>

                </div>
            </div>

        </div>

    );
};

export default Signup;