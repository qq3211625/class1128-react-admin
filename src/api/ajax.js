//封装axios用来发送请求模块
//需求
//1.返回值promise
//2.请求成功,返回值里面就是data数据
//3请求失败,统一处理错误
import axios from 'axios';
import { message } from 'antd';

export default function ajax(url, data, method = 'GET') {
	//将请求方式转为大写
	method = method.toUpperCase();
	let promise = null;
	
	
		if (method === 'GET') {
		//GET
			promise = axios.get(url, {params: data})
		}else {
			//POST
			promise = axios.post(url, data)
		}
		return promise
		.then((res) => {
			return res.data;
		})
		.catch(err => {
			//请求失败
			console.log('请求失败');
			console.log(err);
			console.log('请求失败');
			// 提示给用户
	 		message.error('网路出错');	
			})

}
