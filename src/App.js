// import logo from './logo.svg';
import { Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent'; //Importing menu component
import {DISHES} from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes : DISHES,
    };
  }
  render() {
    return (
      <div >
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
                First Application
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} /> 
       
      </div>
    );
  }
  
}

export default App;
