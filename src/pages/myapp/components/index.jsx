import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Table,Button,Input, Form,Switch,Menu} from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;


export  class Contents extends Component {
  render() {
      const {content:{columns,data}} = this.props
      // console.log('@@@',this.props)
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}

export class Footers extends Component {
    render() {
      return (
        <div>
          <Switch checkedChildren="查看通过" unCheckedChildren="查看通过" />
          <Switch checkedChildren="查看全部" unCheckedChildren="查看全部" defaultChecked />
        </div>
      )
    }
  }

export class Headers extends Component {
  
  render() {
    const {btns} = this.props
    console.log("@@@",btns)
    return (
      <div>
        <Form>
          <Form.Item>
            <Input style={{width:'300px'}} addonBefore='科目' />
            {btns.map(i=>{
            if(i.btnType==='out')
            return <Button type='primary' style={{marginLeft:"5px"}}>{i.btnValue}</Button>
          })}
          </Form.Item>
          
        </Form>
      </div>
    )
  }
}

export class Siders extends Component {

  handleClick = e => {
    console.log('click ', e);
  }

    render() {
      return (
        <div>
          <Menu
            onClick={this.handleClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" icon={<MailOutlined />} title="成绩首页">
              <Menu.ItemGroup key="g1" title="科目分类">
              <NavLink to="needed"><Menu.Item key="1">必修课</Menu.Item></NavLink>
                <NavLink to="university">
                  <SubMenu key="sub3" title="选修课">
                    <Menu.Item key="2">院级选修</Menu.Item>
                    <Menu.Item key="3">校级选修</Menu.Item>
                  </SubMenu>
                </NavLink>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="考试安排">
            <Menu.ItemGroup key="g1" title="考试详情">
              <Menu.Item key="4">待考试</Menu.Item>
              <SubMenu key="sub3" title="已考试">
                <Menu.Item key="5">已参与考试</Menu.Item>
                <Menu.Item key="8">已缺考考试</Menu.Item>
              </SubMenu>
              <Menu.Item key="6">待安排考试</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined />} title="个人信息">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      )
    }
  }