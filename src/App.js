import {PureComponent} from 'react'
import {Menu} from 'antd'
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import "./app.css"
import Myapp from './pages/myapp';
import Mymail from './pages/mymail';

export default class App extends PureComponent{

	handleClick = (e) => {
		this.setState({current:e.key})
		// console.log(window.location)
	}
	state = {
		current:'app'
	}
	render(){
		const {current} = this.state
		return (
			<div>
				<Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
				<Menu.Item key="app"  icon={<AppstoreOutlined />}>
				App
				</Menu.Item>
				<Menu.Item key="mail" icon={<MailOutlined />}>
				Mail
				</Menu.Item>
				</Menu>
				{(()=>{
					switch(current){
						case 'app':
						return <Myapp />;
						case 'mail':
						return <Mymail />
						default: return null;
					}
				})()}
			</div>
		)
	}
}
