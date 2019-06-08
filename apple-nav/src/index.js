import React from 'react';
import ReactDOM from 'react-dom';

// import styling
import './css/index.css';

// import components
import App from './App';

// import dependencies
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));