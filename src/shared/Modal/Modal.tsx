import { type FC } from 'react';
import Backdrop from "../Backdrop/Backdrop.tsx";

interface ModalProps {
  title?: string;
}

const Modal: FC<ModalProps> = () => {
  return (
    <>
      <Backdrop />
      <div className="modal show" style={{display: 'block'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Modal title</h1>
            </div>
            Modal Content
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;