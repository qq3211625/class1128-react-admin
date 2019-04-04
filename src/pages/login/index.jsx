// 登陆路由组件
//引入模块
import React, { Component } from 'react';
// 引入登陆组件
import { Form, Icon, Input, Button, message } from 'antd';
//import { Redirect } from 'react-router-dom';
import { reqLogin } from '../../api';
import { setItem } from '../../utils/storage-utils';

import "./index.less";
// 引入图片地址
import logo from '../../assets/images/logo.png';

const Item = Form.Item;
@Form.create()  //高阶组件传入下面组件
class Login extends Component {


    login = (e) => {
        e.preventDefault();
        //效验表单是否通过
        //获取表单数据
		
		this.props.form.validateFields(async (err, values) => {
			if (!err) {
				//效验成功
//				console.log(values);
			//拿到用户登陆信息
			const { username, password } =values;
			//发送ajax请求      开发环境使用代理服务器    上线后要改成jsonp 或 cors
			const result = await reqLogin(username, password);
//			判断登陆后是否成功
//					拿到返回值进行比较
				if (result.status === 0){
					//登陆成功  提示登陆成功,保存用户信息,跳转主界面
					message.success("登陆成功");
					//保存用户信息
					setItem(result.data);
					console.log(result.data);
					this.props.history.replace('/');//跳转页面
				}else {
					//登陆失败
					message.error("登陆失败");
				}
			}else {
				//效验失败
				console.log('!!!!!');
				console.log(err);
				console.log('!!!!!');
			}
		})
    }
    
	//自定义表单效验规则
	validator = (rule, value, callback) => {
		const length = value && value.length;
		const pwdReg = /^[a-zA-Z0-9_]+$/;
		if(!value){
			//callback传参表示效验失败
			callback('必须输入用户名');
		}else if(length < 4){
			callback('密码必须大于4位');
			
		}else if(length > 12){
			callback('密码必须小于12位');
			
		}else if(!pwdReg.test(value)){
			callback('密码必须是英文.数字或下划线');
		}
		else {
			callback();
		}
	}

    render () {
    	const { getFieldDecorator } = this.props.form;
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
                            {	//getFieldDecorator()返回值是一个高阶组件
                            	//getFieldDecorator()()返回一个新组建,新组建内部就会给你传入的组件定义效验规则
                            	//getFieldDecorator(标识名称,配置对象)(组件)
                            	//配置对象 --> 属性名固定的对象
                            	getFieldDecorator('username', {
						            rules: [
						            	{ required: true, whitespace:true, message: '必须输入用户名' },
						            	{min:4, message:'用户名必须大于4位'},
						            	{max: 12, message:'用户名必须小于12位'},
						            	{pattern:/^[a-zA-Z0-9_]+$/,message: '用户名必须是英文.数字或下划线'}
						            ]
					            })(
                            		<Input prefix={<Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            	)
                            }
                        </Item>
                        <Item>
                        	{	
                            	//配置对象 --> 属性名固定的对象
                            	getFieldDecorator('password', {
						            rules: [
						            	{validator: this.validator}
						            ]
					            })(
		                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            	)
                            }
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
//Form.create({ name: 'normal_login' })返回高阶函数
//Form.create({ name: 'normal_login' })(Login);返回新的组件


export default Login;