// import logo from './logo.svg';
import { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configurationStore';

const store = ConfigureStore();
class App extends Component {

  render() {
    return (
      <Provider store={store} >
      {/* Using BrowserRouter */}
        <BrowserRouter>
          <div >
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

}

export default App;
