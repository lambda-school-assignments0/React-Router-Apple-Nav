import React from 'react';

// import components
import NavWrapper from './components/NavBar/NavWrapper';
import DummyPage from './components/DummyPage';

// import dependencies
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div className='nav'>
        <NavWrapper />
      </div>
      
      <header className='App-header'>
        Header
      </header>
      <Route path='/' component={DummyPage} exact/>
      <Route path='/mac' component={DummyPage} />
      <Route path='/ipad' component={DummyPage} />
      <Route path='/iphone' component={DummyPage} />
      <Route path='/watch' component={DummyPage} />
      <Route path='/tv' component={DummyPage} />
      <Route path='/music' component={DummyPage} />
      <Route path='/support' component={DummyPage} />
    </div>
  );
}

export default App;