import React from 'react';
import { Input,List,Checkbox,Button} from 'antd';
import 'antd/dist/antd.css';
import './todo.css';
import Store from './store/store.jsx'
const store = new Store();
export default class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            store:store
        }
    }
    addTodo = (e)=>{
        let value = e.target.value;
        if(value.trim()){
            this.state.store.addTodo(value);
            e.target.value = ""
        }
        this.setState({store})
    }
    changeTodoDone = (key)=>{
        this.state.store.changeTodoDone(key);
        this.setState({store})
    }
    changeAllTodosDone =()=>{
        this.state.store.changeAllTodosDone(this.state.store.isAllCheck);
        this.setState({store})
    }
    deleteTodo =(key)=>{
        this.state.store.deleteTodo(key);
        this.setState({store})
    }
    deleteAllTodosDone =()=>{
        this.state.store.deleteAllTodosDone();
        this.setState({store})
    }
    render(){
        return (
            <div className="pannel">
                <Input placeholder="input your todo,press enter to add." size="default" onPressEnter={this.addTodo.bind(this)}/>
                <List
                    footer={<div className="footer-content">
                        <Checkbox checked={this.state.store.isAllCheck} onChange={this.changeAllTodosDone.bind(this)}>全选</Checkbox>
                        &nbsp;&nbsp;已完成{this.state.store.lengthOfFinishTodos}个/共{this.state.store.lengthOfTodos}个 
                        <Button type="primary" className="btn-right-footer" onClick={this.deleteAllTodosDone.bind(this)} disabled ={!this.state.store.haveFinishedTodo}>删除所有选中</Button></div>}
                    bordered
                    dataSource={this.state.store.todos}
                    renderItem={item => (<List.Item>
                        <Checkbox checked={item.done} onChange={this.changeTodoDone.bind(this,item.key)}>{item.title}</Checkbox> 
                        <Button type="primary" className="btn-right" onClick={this.deleteTodo.bind(this,item.key)}>删除</Button></List.Item>)}
                />
            </div>
        )
    }
}