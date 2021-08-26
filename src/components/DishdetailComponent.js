import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';



// Adding Functional component
function RenderDish({dish}) {
    if (dish != null) {
        return (

            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>

        )
    }
    else {
        return (
            <div></div>
        )
    }
}

function RenderComments({comments}) {
    if (comments == null) {
        return (
            <div></div>
        )
    }
    const showComments = comments.map((cmnt) => {
        return (
            <li key={cmnt.id} className="list-unstyled">
                <p>{cmnt.comment}</p>
                <p>--{cmnt.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(cmnt.date)))}</p>
            </li>
        )
    });

    return (
        <div className="col-12 col-md-5 m-1">
            <h3>Comments</h3>
            {showComments}
        </div>
    )
}



const DishDetail = (props) => {
    const dish = props.dish;
    if (dish == null) {
        return (
            <div></div>
        )
    }
    // const dishItem = RenderDish(dish);
    // const dishComment = RenderComments(dish.comments);
    return (
        <div className="container">
            <div className="row">
                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.dish.comments} />
                
            </div>
        </div>
    )
}
    
export default DishDetail;
