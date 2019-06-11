import React from 'react';

// import components
import HomePage from './components/HomePage';

// import dependencies
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state={
      selectedNav: '',
    }
  }

  handleSelectNav = e => 
  {
    console.log(e);
    this.setState({
      selectedNav: 'mac',
    })
  }

  render() {
    return (
      <div className='App'>
        <Route path='/' exact render={(props) => (
          <HomePage {...props} handleSelectNav={this.handleSelectNav} />
        )} />
        <Route path='/:id' render={(props) => (
          <HomePage {...props} handleSelectNav={this.handleSelectNav} />
        )} />
      </div>
    );
  }
}

export default App;