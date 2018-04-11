import React, { Component } from 'react';
import './Register.css';
import PaperSimple from './component/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

const style = {
    height: 250,
    width: 500,
    margin: '200px auto',
    textAlign: 'center',
    display: 'inline-block',
  };

class Register extends Component{

  constructor(props){
    super(props);
    this.state={
        date: ''
    };
  }

    date(e){
        console.log(this.date);
    }

    render(){
        return(
            <PaperSimple circle={false} style={style}>
                <div style={{color : '#808080', fontSize : 20}}><b>Register</b></div>
                <TextField className="" fullWidth={false} hintText="Name" name="name" onChange={e=> this.submitLogin(e)} floatingLabelText="Name"/>
                <DatePicker hintText="DOB" name="date" value={this.state.date} onChange={e => this.date(e)}/>
          </PaperSimple>
        )
    }
}

export default Register;


