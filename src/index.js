import React from 'react';
import ReactDom from 'react-dom';
//使用路由组件需要在最外面包一层Router
import { BrowserRouter as Router } from 'react-router-dom';

//引入组件
import App from './App';

ReactDom.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));