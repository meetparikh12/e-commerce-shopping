import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import { setUserInfo } from '../../actions/actions';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import setJwtToken from '../shared/securityUtils/setJwtToken';
toast.configure();
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

    componentDidMount(){
        if(this.props.loggedInUser.userId){
            this.props.history.push('/');
        }
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
            setJwtToken(token);
            const decoded_token = jwt_decode(token);
            this.props.setUserInfo(decoded_token, this.props.history);
            toast.success('Logged In Successfully', {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000});

        })
        .catch((err)=> {
            console.log(err.response.data);
            toast.error(err.response.data.message, {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000});
        });        
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
    setUserInfo: PropTypes.func.isRequired,
    loggedInUser: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.userInfo
    }
}
const mapDispatchToProps = dispatchEvent => {
    return {
        setUserInfo: (userInfo, history) => {
            dispatchEvent(setUserInfo(userInfo))
            history.push('/');
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);