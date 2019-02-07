import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#482C20",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <div className="App-padding">
            <Typography variant="h3" color="secondary">
              A Small Puzzle
            </Typography>
            <div className="Puzzle-box">
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
