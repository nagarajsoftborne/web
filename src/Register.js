import React, { Component } from 'react';
import './Register.css';
import PaperSimple from './component/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';

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
        date: '',
        name: ''
    };
  }

    registerData(e){
            this.setState({
                [e.target.name] : e.target.value
            });
    }

    DatePicker(e,data){
        // this.setState({
        //     date : '12323'
        // });
        console.log(data);
    }

    submitRegister(){
        console.log(this.state);
    }
    
    render(){
        return(
            <PaperSimple circle={false} style={style}>
                <div style={{color : '#808080', fontSize : 20}}><b>Register</b></div>
                <TextField className="" fullWidth={false} hintText="Name" name="name" onChange={e=> this.registerData(e)} floatingLabelText="Name"/>
                <DatePicker floatingLabelText="DOB" hintText="DOB" name="date"  onChange={this.DatePicker}/>
                <FlatButton label="Cancel" secondary={true} backgroundColor={'#E7E7E7'} hoverColor='#B39DDB' />&nbsp;
                <FlatButton label="Submit" primary={true} backgroundColor={'#E7E7E7'} hoverColor='#B39DDB' onClick={e=> this.submitRegister(e)} />
            </PaperSimple>
        )
    }
}

export default Register;


