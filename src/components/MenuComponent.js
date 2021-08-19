import { div } from 'prelude-ls';
import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from 'reactstrap';

//Adding a new component
class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
        }

    }
    //By this we change the state
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    // This function render the selected dish
    renderDish(dish){
        if(dish != null){
            return (
                //Using card instead of media to show the dishes
                <Card>
                    <CardImg width="100%" src={dish.image} alt ={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )

        }

        else
        {
            return(
                <div></div>
            )
        }
    }


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {/* This will render the dish on which we have clicked  */}
                <div className="row">
                    <div className="col-12 ml-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }

}

export default Menu;