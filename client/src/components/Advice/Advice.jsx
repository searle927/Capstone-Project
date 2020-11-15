import React, { Component, useState, useEffect } from 'react'
import './Advice.css'



class Advice extends Component {

    constructor(props){
      super(props);
      this.state={
        title: 'Send all your marriage and wedding advice here!',
        act: 0,
        datas: [],
        isLoaded: false,
      }
    } 

    componentDidMount() {

      fetch('https://tbd-wedding-app.herokuapp.com/advices')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            datas: json,
          })
        });
    }

  
    Submit = (e) =>{
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
  
    Remove = (i) => {
      let datas = this.state.datas;
      datas.splice(i,1);
      this.setState({
        datas: datas
      });
  
      this.refs.myForm.reset();
      this.refs.name.focus();
    }
  
    Edit = (i) => {
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
        <div className="adviceContainer">
          <h2>{this.state.title}</h2>
          <form ref="myForm" className="myForm">
            <label><p className="name">Name:</p></label>
            <div>
            <input type="text" ref="name" placeholder="your name" className="nameBox" /><br />
            </div>
            <label><p className="advice">Advice:</p></label>
            <input type="text" ref="advice" placeholder="your advice" className="adviceBox" /><br />
            <button onClick={(e)=>this.Submit(e)} className="myButton">submit </button>
          </form>
          <br />
          <div className="adBoxOutput">
            {datas.map((data, i) =>
              <li key={i} className="myList">
                <div className='adName'>
                Name: {data.name}
                </div>
                <div className='adOutput'>
                 Advice: {data.advice} <br /><br />
                </div>
                  <button onClick={()=>this.Remove(i)} className="myListButton">Remove </button>
                  <button onClick={()=>this.Edit(i)} className="myListButton">Edit </button>
              </li>
            )}
          </div>
        </div>
      );
    }
  }
  
  export default Advice;