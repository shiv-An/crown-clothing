import React from 'react';
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils.js';
import './SignUp.styles.scss'

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert(`password don't match`);
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }
        catch (error) {
            console.error(error);
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name,value} = event.target;

        this.setState({[name]:value});
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name='displayName' type='text' label='Display Name' handleChange={this.handleChange} value={displayName} required />
                    <FormInput name='email' type='text' label='Email' handleChange={this.handleChange} value={email} required />
                    <FormInput name='password' type='password' label='Password' handleChange={this.handleChange} value={password} required />
                    <FormInput name='confirmPassword' type='password' label='Confirm Password' handleChange={this.handleChange} value={confirmPassword} required />
                    <CustomButton type='submit' >SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;