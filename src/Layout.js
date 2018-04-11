import React, { Component } from 'react';
import PaperSimple from './component/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import './Layout.css';

const style = {
  height: 250,
  width: 500,
  margin: '200px auto',
  textAlign: 'center',
  display: 'inline-block',
};

class Layout extends Component {

  constructor(props){
    super(props);
    this.state={
      email : '',
      pass : ''
    }
  }

  submitLogin(e){
    this.setState({
      [e.target.name] : e.target.value
    });
    console.log(e.target.name , e.target.value);
  }

  submit(){
    console.log(this.state);
  }

  render() {
    return (
      <div className="Layout">  
          <PaperSimple circle={false} style={style}>
            <div style={{color : '#808080', fontSize : 20}}><b>Login</b></div>
             <TextField className="" fullWidth={true} hintText="Email" name="email" value={this.state.email} onChange={e=> this.submitLogin(e)} floatingLabelText="Email ID"/>
             <TextField className="" fullWidth={true} hintTex="Password" name="pass" value={this.state.pass} onChange={e=> this.submitLogin(e)} floatingLabelText="Password"/>
             <FlatButton label="Cancel" secondary={true} backgroundColor={'#E7E7E7'} hoverColor='#B39DDB' />&nbsp;
             <FlatButton label="Submit" primary={true} backgroundColor={'#E7E7E7'} hoverColor='#B39DDB' onClick={e=> this.submit(e)} />
          </PaperSimple>
      </div>
    );
  }
}

export default Layout;