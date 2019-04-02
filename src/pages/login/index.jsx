// 登陆路由组件
//引入模块
import React, { Component } from 'react';
// 引入登陆组件
import { Form, Icon, Input, Button, } from 'antd';
import "./index.less";
// 引入图片地址
import logo from './logo.png';

const Item = Form.Item;
export default class Login extends Component {


    login = (e) => {
        e.preventDefault();
    }


    render () {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目:后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h3>用户登陆</h3>
                    <Form onSubmit={this.login} className="login-form">
                        <Item>
                            <Input prefix={<Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        </Item>
                        <Item>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                              登陆
                            </Button>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}