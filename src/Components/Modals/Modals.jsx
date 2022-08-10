import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ModalContact(props) {
  return (
    <Modal {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="text-center">
        <h4>Thanks for being awesome!</h4>
        <br />
        <p>
        We have received your message and would like to thank you for writing to us. We will reply by email as soon as possible. <br /> <br />
        Talk to you soon, Your <span className='fw-bolder'>PRESTIGE</span>.
        </p>
        <div>
          <Button onClick={props.onHide}>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export function ModalCheckout(props) {
  return (
    <Modal {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="text-center">
        <h4>Thank you for your order!</h4>
        <br />
        <p>
        We're excited to be working with you! <br />
        We will send your order as soon as possible! <br /> <br/>
        Your <span className='fw-bolder'>PRESTIGE</span>.
        </p>
        <div>
          <Button onClick={props.onHide}>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}