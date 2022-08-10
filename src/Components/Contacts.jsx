import React, { useState } from 'react';
import contact from '../assets/images/contact.png'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { ModalContact } from './Modals/Modals';



const Contacts = () => {
  const [modalShow, setModalShow] = useState(false);

  const handlerClick = (e) => {
    e.preventDefault()
    setModalShow(true)
  }

  return(
    <div className="container">
      <div className="row">
        <div className="col-12 text-center py-2 my-3">
          <h1>Have some questions?</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 contact d-flex justify-content-center">
          <img src={contact} alt="Contact us" />
        </div>
        <div className="col-md-6">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="John Smith" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter your message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button onClick={(e) => handlerClick(e)} variant="dark" className='w-100' type="submit">
            Send
          </Button>
          <ModalContact
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
         </Form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;