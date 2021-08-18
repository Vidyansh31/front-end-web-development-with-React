// import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent'; //Importing menu component

function App() {
  return (
    <div >
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
              First Application
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu /> 
     
    </div>
  );
}

export default App;
