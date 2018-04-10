import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green100, green500, green700} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
      primary1Color: green500,
      primary2Color: green700,
      primary3Color: green100,
    }
  });

const PaperSimple = (props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Paper style={props.style} zDepth={5} circle={props.circle}>{props.children}</Paper>
  </MuiThemeProvider>
);

export default PaperSimple;