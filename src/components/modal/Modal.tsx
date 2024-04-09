import ReactDOM from "react-dom";

import { useEffect } from "react";

import "./Modal.scss";

const Modal = ({ isOpen, children }: any) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalRoot = document.getElementById("modal-root");

  if (modalRoot) {
    return ReactDOM.createPortal(
      <div className="modal-overlay">
        <div className="modal-content">{children}</div>
      </div>,
      modalRoot
    );
  } else {
    return null;
  }
};

export default Modal;
