import React from 'react'
import { Router, Route, Link } from 'react-router'


export default class extends React.PureComponent{
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
      <h1>首页</h1>
      <div>
        <button>列表页</button>
        <button>内容页</button>
      </div>
    </div>
    )
  }
};
