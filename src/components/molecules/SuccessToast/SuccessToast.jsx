import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const SuccessToast = ({ show, message, onClose }) => {
  return (
    <ToastContainer position="bottom-start" className="px-6 py-3">
      <Toast
        className="bg-black text-xl"
        show={show}
        onClose={onClose}
        delay={3000}
        autohide
      >
        <Toast.Body className="text-white px-6 py-3">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default SuccessToast;
