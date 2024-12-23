import React, { createContext, useContext, useState } from "react";
import SuccessToast from "../components/molecules/SuccessToast/SuccessToast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const showToast = (msg) => {
    setMessage(msg);
    setShow(true);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <SuccessToast
        show={show}
        message={message}
        onClose={() => setShow(false)}
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
