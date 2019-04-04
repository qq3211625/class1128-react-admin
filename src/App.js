import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
//引入路由组件
import Login from "./pages/login";
import Admin from "./pages/admin";
//引入公共样式
import "./assets/less/reset-min.css";
import "./assets/less/index.less";

/*
应用根组件
 */
class App extends Component {
    render() {
        return (
            <Switch>
                <Route path='/login' component={Login}/>
                {/*暂时让他上来再login便开发*/}
                {/*<Redirect to='/login'/>*/}
                <Route path='/' component={Admin}/>
            </Switch>
        )
    }
}

export default App