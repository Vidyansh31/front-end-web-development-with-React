// import React, { Component } from 'react';
// import { Modal, ModalHeader, ModalBody, Button, Row, Col, Label } from 'reactstrap';
// import { Control, LocalForm, Errors } from 'react-redux-form';

// //// validators
// const required = (val) => val && val.length; //value > 0
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => (val) && (val.length >= len);

// class CommentForm extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             isModalOpen: false
//         }
//         this.toggleModal = this.toggleModal.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     toggleModal() {
//         this.setState({
//             isModalOpen: !this.state.isModalOpen
//         });
//     }

//     handleSubmit(values) {
//         console.log('Current state is ' + JSON.stringify(values));
//         alert('Current state is ' + JSON.stringify(values));
//     }

//     render() {
//         return (
//             <div className="row">
//                 <Button outline onClick={this.toggleModal} className="btn "><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
//                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
//                     <ModalHeader toggle={this.toggleModal}> Submit Comment </ModalHeader>
//                     <ModalBody>
//                         <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
//                             {/* rating */}
//                             <Row className="form-group">
//                                 <Label htmlFor="rating" md={12} >Rating</Label>
//                                 <Col md={12}>
//                                     <Control.select model=".rating"
//                                         className="form-control"
//                                         name="rating"
//                                         id="rating"
//                                         validators={{
//                                             required
//                                         }}
//                                     >
//                                         <option>Please Select</option>
//                                         <option>1</option>
//                                         <option>2</option>
//                                         <option>3</option>
//                                         <option>4</option>
//                                         <option>5</option>
//                                     </Control.select>
//                                     <Errors
//                                         className="text-danger"
//                                         model=".rating"
//                                         show="touched"
//                                         messages={{
//                                             required: 'Required',
//                                         }}
//                                     />
//                                 </Col>
//                             </Row>
//                             {/* author */}
//                             <Row className="form-group">
//                                 <Label htmlFor="author" md={12}> Your Name </Label>
//                                 <Col md={12}>
//                                     <Control.text model=".author" id="author" name="author"
//                                         placeholder="First Name"
//                                         className="form-control"
//                                         validators={{
//                                             required, minLength: minLength(3), maxLength: maxLength(15)
//                                         }}
//                                     />
//                                     <Errors
//                                         className="text-danger"
//                                         model=".author"
//                                         show="touched"
//                                         messages={{
//                                             required: 'Required',
//                                             minLength: 'Must be greater than 2 characters',
//                                             maxLength: 'Must be 15 characters or less'
//                                         }}
//                                     />
//                                 </Col>
//                             </Row>
//                             {/* comment */}
//                             <Row className="form-group">
//                                 <Label htmlFor="comment" md={12}>Comment</Label>
//                                 <Col md={12}>
//                                     <Control.textarea model=".comment" id="comment" name="comment"
//                                         rows="6"
//                                         className="form-control"
//                                         validators={{
//                                             required
//                                         }}
//                                     />
//                                     <Errors
//                                         className="text-danger"
//                                         model=".comment"
//                                         show="touched"
//                                         messages={{
//                                             required: 'Required',
//                                         }}
//                                     />
//                                 </Col>
//                             </Row>
//                             {/* submit button */}
//                             <Row className="form-group">
//                                 <Col>
//                                     <Button type="submit" color="primary">
//                                         Submit
//                                     </Button>
//                                 </Col>
//                             </Row>
//                         </LocalForm>
//                     </ModalBody>
//                 </Modal>
//             </div>

//         )

//     }
// }

// export default CommentForm;
