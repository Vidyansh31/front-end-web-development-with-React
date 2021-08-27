// import logo from './logo.svg';
import { Component } from 'react';

import Menu from './MenuComponent'; //Importing menu component
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };

    this.onDishselect = this.onDishselect.bind(this);
  }

  onDishselect(dishId) {
    this.setState({ selectedDish: dishId })
  }

  render() {
    return (
      <div >
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => { this.onDishselect(dishId) }} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }

}

export default Main;
