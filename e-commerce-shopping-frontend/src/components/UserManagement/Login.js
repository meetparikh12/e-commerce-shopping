import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import { setUserInfo } from '../../actions/actions';
import jwt_decode from 'jwt-decode';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.formChangeHandler = this.formChangeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }
    formChangeHandler(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    formSubmitHandler(e) {
        e.preventDefault();
        const loginUser = {
            email: this.state.email,
            password: this.state.password
        }
      
        axios.post('http://localhost:5000/api/users/login', loginUser)
        .then((res)=> {
            const {token} = res.data;
            localStorage.setItem("jwt-token", token);
            const decoded_token = jwt_decode(token);
            this.props.setUserInfo(decoded_token, this.props.history);
        })
        .catch((err)=> console.log(err.response.data));        
    }
    render() {
        return (
            <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <form onSubmit={this.formSubmitHandler}>
                                <div className="form-group">
                                    <input type="email" required className="form-control form-control-lg" onChange={this.formChangeHandler} value={this.state.email} placeholder="Email Address" name="email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" required className="form-control form-control-lg" onChange={this.formChangeHandler} value={this.state.password}  placeholder="Password" name="password" />
                                </div>
                                <input type="submit" value="Login" className="btn btn-info btn-block mt-4" />
                                <Link to="/register" style={{"textDecoration": "none"}}><button type="button" className="btn btn-outline-info btn-block mt-4">Sign up</button></Link>
                                <br/>
                            </form>
                        </div>
                    </div>
             </div> 
        )
    }
}
Login.propTypes = {
    setUserInfo: PropTypes.func.isRequired
}
const mapDispatchToProps = dispatchEvent => {
    return {
        setUserInfo: (userInfo, history) => {
            dispatchEvent(setUserInfo(userInfo))
            history.push('/');
        }
    }
}
export default connect(null, mapDispatchToProps)(Login);