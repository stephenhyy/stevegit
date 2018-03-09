import React from 'react';
import {Link } from 'react-router';
import './home.css';
export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='content'>
                <div ><Link to='/'>首页</Link>&nbsp;&nbsp;<Link to='/about'>About</Link>&nbsp;&nbsp;<Link to='/faq'>Faq</Link>&nbsp;&nbsp;<Link to='/todo'>Todo</Link></div>
                <hr/>
                {this.props.children || 'react page! Steve'}
            </div>
        )
    }
}
    