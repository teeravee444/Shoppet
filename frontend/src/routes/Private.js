import { Redirect, Route } from "react-router";

const Private = ({ component: Component, ...rest }) => {

    return (
        <Route {...rest} render={props =>
            localStorage.getItem('jwt') ?
            <Component {...props} />:
            <Redirect to='/'/>
        }
        />
    )
}

export default Private