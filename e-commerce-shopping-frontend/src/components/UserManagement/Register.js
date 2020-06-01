import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import {toast} from 'react-toastify';

toast.configure();

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:"",
            name:"",
            password:"",
            confirmPassword:"",
            isBtnDisabled: false
        }
        this.fieldChangeHandler = this.fieldChangeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    componentDidMount() {
        if (this.props.loggedInUser.userId) {
            this.props.history.push("/");
        }
    }

    fieldChangeHandler(e){
        this.setState({
        [e.target.name] : e.target.value
        })
    }

    formSubmitHandler(e){
        e.preventDefault();

        this.setState({
            isBtnDisabled: true
        })
        const newUser = {
            "name": this.state.name,
            "email": this.state.email,
            "password": this.state.password,
            "confirmPassword": this.state.confirmPassword
        }
        axios.post('http://localhost:5000/api/users/register', newUser)
        .then((res)=> {
            toast.success(res.data.message, {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000});
            this.props.history.push('/login');
        })
        .catch((err)=> {
            this.setState({
                isBtnDisabled: false
            })
            toast.error(err.response.data.message[0].msg || err.response.data.message, {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000});
        });
    }

    render() {
        return (
            <div className="Register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Account</p>
                            <form onSubmit={this.formSubmitHandler}>
                                <div className="form-group">
                                    <input type="text" name="name" value={this.state.name} onChange= {this.fieldChangeHandler} className="form-control form-control-lg"
                                     placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" value={this.state.email} onChange= {this.fieldChangeHandler} name="email" className="form-control form-control-lg" 
                                    placeholder="Email Address"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" value={this.state.password} onChange= {this.fieldChangeHandler} placeholder="Password" name="password" className="form-control form-control-lg"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" value={this.state.confirmPassword} onChange= {this.fieldChangeHandler}  placeholder="Confirm Password" name="confirmPassword" className="form-control form-control-lg"/>
                                </div>
                                <input type="submit" disabled={this.state.disabled} value="Sign up" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    loggedInUser: PropTypes.object.isRequired

}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.userInfo
    }
}

export default connect(mapStateToProps, null)(Register);