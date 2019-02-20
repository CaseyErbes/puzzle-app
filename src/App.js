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
  renderTile(rowInt, colInt) {
    let tileId = colInt+4*(rowInt-1);
    return (
      <div className={"Puzzle-tile Puzzle-row-"+rowInt+" Puzzle-col-"+colInt} id={tileId}>
        <span>{tileId}</span>
      </div>
    );
  }

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
                {this.renderTile(1, 1)}
                {this.renderTile(1, 2)}
                {this.renderTile(1, 3)}
                {this.renderTile(1, 4)}
                {this.renderTile(2, 1)}
                {this.renderTile(2, 2)}
                {this.renderTile(2, 3)}
                {this.renderTile(2, 4)}
                {this.renderTile(3, 1)}
                {this.renderTile(3, 2)}
                {this.renderTile(3, 3)}
                {this.renderTile(3, 4)}
                {this.renderTile(4, 1)}
                {this.renderTile(4, 2)}
                {this.renderTile(4, 3)}
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
