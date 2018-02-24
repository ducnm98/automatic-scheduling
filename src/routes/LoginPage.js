import React, { Component } from 'react';
import bcryptjs from 'bcryptjs';

import LoginForm from '../components/Form/LoginForm'
import Footer from "./../components/Footer";
import Header from "./../components/Header/";

class LoginPage extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    };

    submit = (data) => {
      console.log(data)
    }


    render() {
        return (
            <LoginForm submit={this.submit}/>
        );
    }
}

export default LoginPage;