import { Switch, Route } from 'react-router-dom'

// Import Screens
import Home from '../screens/Home.screen'
import History from '../screens/private/History.screen'
import Fram from '../screens/Farm.screen'
import About from '../screens/About.screen'
import Login from '../screens/Login.screen'
import Cart from '../screens/Cart.screen'

// Import Private Screens
import Private from './Private'


const Routes = () => {
    return (
        <Switch>

            {/* Private */}
            <Private path="/history" component={History} exact />

            {/* Public Routes */}
            <Route path="/" component={Home} exact />
            <Route path= "/farm" component={Fram} exact />
            <Route path = '/about' component = { About} exact />
            <Route path = "/login" component = {Login} exact /> 
            <Route path = "/cart" component = {Cart} exact />
            {/* 404 not found page */}
            <Route path="*" exact><h1>404 not found</h1></Route>

        </Switch>
    )
}

export default Routes
