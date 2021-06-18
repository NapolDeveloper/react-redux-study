import './App.css';
import GlobalStyle from './styles/GlobalStyle';

import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Counter />
    </Provider>
  );
}

export default App;
