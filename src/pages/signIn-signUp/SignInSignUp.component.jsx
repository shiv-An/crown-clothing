import React from 'react';
import './signInsignUp.styles.scss';
import SignIn from '../../components/sign-in/SignIn.component';
import SignUp from '../../components/sign-up/SignUp.component';

const SignInSignUp = () => (
<div className='sign-in-and-sign-out'>
<SignIn />
<SignUp />
</div>
)

export default SignInSignUp;