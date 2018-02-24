import React, {Component} from 'react'
import Validator from 'validator';
import {Form, Button} from 'semantic-ui-react';

import PropTypes from 'prop-types';

class LoginForm extends Component {

    state = {
        data: {
            username: '',
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    };

    onChange = (e) => this.setState({
        data: {
            ...this.state.data,
            [e.target.name]: e.target.value
        }
    });

    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) 
            errors.email = "It must be email";
        if (!data.password) 
            errors.password = "Can't be blank";
        if (!data.username) 
            errors.username = "Can't be blank";
        return errors;
    }

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if (Object.keys(errors).length === 0) {
            this
                .props
                .submit(this.state.data);
        }
    };

    render() {
        const {errors, data} = this.state
        return (
            <Form onSubmit={this.onSubmit} class="ui form attached fluid segment">
                <Form.Field error={!!errors.username}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                        value={data.username}
                        onChange={this.onChange}/>

                </Form.Field>

                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@example.com"
                        value={data.email}
                        onChange={this.onChange}/>
                </Form.Field>

                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Make it secure"
                        value={data.password}
                        onChange={this.onChange}/>
                </Form.Field>

                <br/>

                <Button primary>Login</Button>
            </Form>

        )
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginForm;