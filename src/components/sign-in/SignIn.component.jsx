import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/CustomButton.component';
import FormInput from '../form-input/FormInput.component';
import './SignIn.styles.scss'


class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = (event) => {
        const { name , value} = event.target;

        this.setState({[name]:value})
    }


    render(){
        return(
            <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
            <FormInput name='email' type='email' label='Email' handleChange={this.handleChange} value={this.state.email} required />
            <FormInput name='password' type='password' label='Password' handleChange={this.handleChange} value={this.state.password} required />

            <div className='buttons'>
            <CustomButton type='submit'>SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
            </div>
            </form>
            </div>
        )
    }
}

export default SignIn;