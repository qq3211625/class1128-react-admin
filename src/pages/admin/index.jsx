// 主页面组件
//引入模块
import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
//读取用户信息
import { getItem } from '../../utils/storage-utils.js';
import memory from '../../utils/memory-utils.js';
import { Layout, Breadcrumb } from 'antd';
import LeftNav from '../../components/left-nav'

const { Header, Content, Footer, Sider } = Layout;

export default class Admin extends Component {
	
	
	constructor(props){
		super(props);
		this.state = {
		    collapsed: false,
		};
		//读取页面localStorage的,没有登陆跳到此页面
    	const user = getItem();
    	if (!user || !user._id){
    		//没有就返回登陆页面
    		this.props.history.replace('/login'); //函数形式在渲染体中没有用
//  		return <Redirect to="/login"/>	//组件要放在渲染函数里才有用
    	}
//	1持久化存储用户信息
//	2性能优化  反复使用getItem方法 ,性能不好,所以保存在memory对象中
    	memory.user = user;
	}
	
	

	onCollapse = (collapsed) => {
	    console.log(collapsed);
	    this.setState({ collapsed });
	}
	
    render () {
    	
        return (
            <div>
                 <Layout style={{ minHeight: '100vh' }}>
			        <Sider
			          collapsible
			          collapsed={this.state.collapsed}
			          onCollapse={this.onCollapse}
			          >
			          <LeftNav/>	
			        </Sider>
			        <Layout>
			          <Header style={{ background: '#fff', padding: 0 }} />
			          <Content style={{ margin: '0 16px' }}>
			            <Breadcrumb style={{ margin: '16px 0' }}>
			              <Breadcrumb.Item>User</Breadcrumb.Item>
			              <Breadcrumb.Item>Bill</Breadcrumb.Item>
			            </Breadcrumb>
			            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
			              Bill is a cat.
			            </div>
			          </Content>
			          <Footer style={{ textAlign: 'center' }}>
			            Ant Design ©2018 Created by Ant UED
			          </Footer>
			        </Layout>
			      </Layout>
            </div>
        )
    }
}