import React, { Component } from 'react'
import { setUserInfo } from '../../actions/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:"",
            name:"",
            password:"",
            confirmPassword:"",
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
        const newUser = {
            "userId": '1324565tgfdrtf3',
            "name": this.state.name,
            "email": this.state.email,
            "password": this.state.password,
            "confirmPassword": this.state.confirmPassword
        }
        this.props.setUserInfo(newUser, this.props.history);
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
                                <input type="submit" value="Sign up" className="btn btn-info btn-block mt-4" />
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

const mapDispatchToProps = dispatchEvent => {
    return {
        setUserInfo: (user, history) => {
                dispatchEvent(setUserInfo(user));
                history.push('/');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);