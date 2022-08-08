import React, { Component } from 'react'
import {Divider,Layout,Tag} from 'antd'
import {Headers,Footers,Siders,Contents} from './components'
const {Header,Sider,Content,Footer} = Layout 

export default class Myapp extends Component {
  state = {
    columns : [
        {
            title: '姓名',
            dataIndex:'name',
            key:'name',
            align:'center',
            render:text => <a>{text}</a>
        },
        {
            title: '年龄',
            dataIndex:'age',
            key:'age',
            align:'center',
        },
        {
            title: '标记',
            dataIndex:'tag',
            key:'tag',
            align:'center',
            render:tag=>{
                let color = 'green'
                    if(tag==='未通过')
                    color = 'red'
                    return(
                        <Tag color={color}>{tag}</Tag>
                    )
                }
        },
        {
            title: '成绩',
            dataIndex:'score',
            key:'score',
            align:'center',
        },
        {
            title: '操作',
            dataIndex:'action',
            key:'action',
            align:'center',
            render: (record)=>{
              return <a>编辑</a>
            }
        }

    ],
    data:[
        {name:'王力',age:19,tag:'通过',score:98,key:1},
        {name:'王力1',age:191,tag:'通过',score:98 ,key:2},
        {name:'王力2',age:192,tag:'未通过',score:58 ,key:3},
        {name:'王力3',age:193,tag:'通过',score:98 ,key:4},
        {name:'王力4',age:194,tag:'未通过',score:48 ,key:5},
        {name:'王力5',age:195,tag:'未通过',score:38 ,key:6},
    ],
    btns:[
        {btnType:'out',btnId:1,btnValue:'搜索'},
        {btnType:'out',btnId:2,btnValue:'重置'},
    ]
}
  render() {
    const {btns,...content} = this.state
    return (
        <>
        <Divider orientation='left'>This is an App</Divider>
            <Layout>
                <Sider style={{backgroundColor:'white'}}><Siders /></Sider>
                <Layout>
                    <Header style={{backgroundColor:'white'}}><Headers btns={btns} /></Header>
                    <Content ><Contents content={content} /></Content>
                    <Footer><Footers /></Footer>
                </Layout>
            </Layout>
        </>
    )
  }
}
