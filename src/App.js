import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
