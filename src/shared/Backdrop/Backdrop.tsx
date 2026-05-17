import type { FC } from "react";

interface BackdropProps {
  show: boolean;
}

const Backdrop: FC<BackdropProps> = ({show}: BackdropProps) => {
  return (
    <div
      className="modal-backdrop show"
      style={{display: show ? 'block' : 'nonef'}}
    />
  );
};

export default Backdrop;