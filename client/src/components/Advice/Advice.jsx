import React, { Component } from 'react'
import './Advice.css'


class Advice extends Component {

    constructor(props){
      super(props);
      this.state={
        title: 'Send all your marriage and wedding advice here!',
        act: 0,
        index: '',
        datas: []
      }
    } 
  
    componentDidMount(){
      this.refs.name.focus();
    }
  
    fSubmit = (e) =>{
      e.preventDefault();
      console.log('try');
  
      let datas = this.state.datas;
      let name = this.refs.name.value;
      let advice = this.refs.advice.value;
  
      if(this.state.act === 0){   //new
        let data = {
          name, advice
        }
        datas.push(data);
      }else{                      //update
        let index = this.state.index;
        datas[index].name = name;
        datas[index].advice = advice;
      }    
  
      this.setState({
        datas: datas,
        act: 0
      });
  
      this.refs.myForm.reset();
      this.refs.name.focus();
    }
  
    fRemove = (i) => {
      let datas = this.state.datas;
      datas.splice(i,1);
      this.setState({
        datas: datas
      });
  
      this.refs.myForm.reset();
      this.refs.name.focus();
    }
  
    fEdit = (i) => {
      let data = this.state.datas[i];
      this.refs.name.value = data.name;
      this.refs.advice.value = data.advice;
  
      this.setState({
        act: 1,
        index: i
      });
  
      this.refs.name.focus();
    }  
  
    render() {
      let datas = this.state.datas;
      return (
        <div className="App">
          <h2>{this.state.title}</h2>
          <form ref="myForm" className="myForm">
            <label><p className="name">Name:</p></label>
            <input type="text" ref="name" placeholder="your name" className="formField" /><br />
            
            <label><p className="advice">Advice:</p></label>
            <input type="text" ref="advice" placeholder="your advice" className="formField" /><br />
            <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
          </form>
          <pre>
            {datas.map((data, i) =>
              <li key={i} className="myList">
                <div className='yes'>
                Name: {data.name}
                </div>
                <div className='no'>
                 Advice: {data.advice} <br /><br />
                </div>
                  <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
                  <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
              </li>
            )}
          </pre>
        </div>
      );
    }
  }
  
  export default Advice;
