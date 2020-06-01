import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function SecuredRoute({component: Component, loggedInUser, ...otherProps}) {
    
    const screens = ["ProductScreen", "AddProduct", "UpdateProduct"]
    let componentName;
    if(!(!!Component.WrappedComponent)) {
        componentName = Component.name
    } else {
        componentName = Component.WrappedComponent.name
    }
    if (screens.find((screenName) => screenName === componentName)) {
        return <Route {...otherProps} render={(props) => {
            if(loggedInUser.userId && loggedInUser.isAdmin){
                return <Component {...props}/>
            } else {
                return <Redirect to="/"/>
            }
        }}/>
    } else {
        return (
            <Route {...otherProps} render={
                (props) => {
                    if(loggedInUser.userId)
                        return <Component {...props} />
                    else {
                        return <Redirect to="/"/>
                    }
                }
            }/>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.userInfo
    }
}

export default connect(mapStateToProps, null)(SecuredRoute);