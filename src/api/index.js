//包含N个请求函数
import ajax from './ajax';
//区分开发环境和生产环境
//服务器代理模式:
//解决开发环境下的跨域问题,生产环境不能使用
//const prefix = process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "http://localhost:5000";

//请求登陆函数
export const reqLogin = (username, password) => {
	return ajax('http://localhost:3000/login',{username, password}, 'POST')
};


