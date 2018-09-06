import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal';
import Pickupsavings from './components/Pickupsavings/Pickupsavings';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      Pickupsavings: -3.85
    }
  }

  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)}/>
          <Pickupsavings price={this.state.Pickupsavings}/>
        </Grid>
      </div>
    );
  }
}

export default App;
