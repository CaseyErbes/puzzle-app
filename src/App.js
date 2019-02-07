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
              <div className="Inner-puzzle-track">
                <div className="Inner-puzzle-box"></div>
                <div className="Puzzle-tile Puzzle-row-1 Puzzle-col-1">
                  <span>1</span>
                </div>
                <div className="Puzzle-tile Puzzle-row-1 Puzzle-col-2">
                  <span>2</span>
                </div>
                <div className="Puzzle-tile Puzzle-row-1 Puzzle-col-3">
                  <span>3</span>
                </div>
                <div className="Puzzle-tile Puzzle-row-1 Puzzle-col-4">
                  <span>4</span>
                </div>
                <div className="Puzzle-tile Puzzle-row-2 Puzzle-col-1">
                  <span>5</span>
                </div>
                <div className="Puzzle-tile Puzzle-row-2 Puzzle-col-2">
                  <span>6</span>
                </div>
                <div className="Puzzle-tile Puzzle-row-2 Puzzle-col-3">
                  <span>7</span>
                </div>
                <div className="Puzzle-tile Puzzle-row-2 Puzzle-col-4">
                  <span>8</span>
                </div>
                <div className="Puzzle-tile Puzzle-row-3 Puzzle-col-1">
                  <span>9</span>
                </div>
                <div className="Puzzle-tile Puzzle-row-3 Puzzle-col-2">
                  <span>10</span>
                </div>
                <div className="Puzzle-tile Puzzle-row-3 Puzzle-col-3">
                  <span>11</span>
                </div>
                <div className="Puzzle-tile Puzzle-row-3 Puzzle-col-4">
                  <span>12</span>
                </div>
                <div className="Puzzle-tile Puzzle-row-4 Puzzle-col-1">
                  <span>13</span>
                </div>
                <div className="Puzzle-tile Puzzle-row-4 Puzzle-col-2">
                  <span>14</span>
                </div>
                <div className="Puzzle-tile Puzzle-row-4 Puzzle-col-3">
                  <span>15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
