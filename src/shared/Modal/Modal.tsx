import { type FC, type ReactNode } from 'react';
import Backdrop from "../Backdrop/Backdrop.tsx";
import type { ModalButtonType } from "../../types.ts";
import Button from "../Button/Button.tsx";

interface ModalProps {
  children: ReactNode;
  title: string;
  show: boolean;
  onClose: () => void;
  buttons?: ModalButtonType[];
}

const Modal: FC<ModalProps> = (ModalProps) => {
  const {
    show,
    title,
    children,
    onClose,
    buttons
  } = ModalProps;

  return (
    show && (
      <>
        <Backdrop show={show} />
        <div className="modal show" style={{display: show ? 'block' : 'none'}}>
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h1 className="modal-title fs-5">{title}</h1>
                <Button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  clickHandler={onClose}
                />
              </div>

              <div className="modal-body">
                {children}
              </div>

              <div className="modal-footer">
                {buttons && buttons.length > 0 ? (
                  buttons.map((btn, index) => (
                    <Button
                      key={index}
                      type="button"
                      className={`btn btn-${btn.type}`}
                      clickHandler={btn.onClick}
                    >
                      {btn.label}
                    </Button>
                  ))
                ) : (
                  <Button
                    type="button"
                    className="btn btn-secondary"
                    clickHandler={onClose}>
                    Закрыть
                  </Button>
                )}
              </div>

            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Modal;