import './App.css';
import GlobalStyle from './styles/GlobalStyle';

import { Provider } from 'react-redux';
import store from './redux/store';
// import Counter from './components/ReduxCounter/Counter';
import Counter from './components/ReduxCounter/Counter';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Counter />
    </React.Fragment>
  );
}

export default App;
