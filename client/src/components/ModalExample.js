import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalExample = (props) => {
  const {
    className,
    isOpen,
    closeModal
  } = props;


  return (
    <div>
      <Modal isOpen={isOpen} toggle={closeModal} className={className}>
        <ModalHeader toggle={closeModal}>Query Submitted</ModalHeader>
        <ModalBody>
          Your enquiry has been submitted , we will get back soon!
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={closeModal}>OK</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;