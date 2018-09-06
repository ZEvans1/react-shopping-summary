import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal';
import Pickupsavings from './components/Pickupsavings/Pickupsavings';
import Taxesfees from './components/Taxesfees/Taxesfees';
import Estimatedtotal from './components/Estimatedtotal/Estimatedtotal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      Pickupsavings: -3.85,
      taxes: 0,
      estimatedTotal: 0
    }
  }

  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)}/>
          <Pickupsavings price={this.state.Pickupsavings}/>
          <Taxesfees taxes={this.state.taxes.toFixed(2)}/>
          <hr/>
          <Estimatedtotal price={this.state.estimatedTotal.toFixed(2)}/>
        </Grid>
      </div>
    );
  }
}

export default App;
