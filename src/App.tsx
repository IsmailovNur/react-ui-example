import './App.css'
import Modal from "./shared/Modal/Modal.tsx";
import { useState } from "react";
import type { ModalButtonType } from "./types.ts";
import Alert from "./shared/Alert/Alert.tsx";

const App = () => {

  const [showModal, setShowModal] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(true);

  const modalButtons: ModalButtonType[] = [
    {
      type: 'primary',
      label: 'Continue',
      onClick: () => {
        console.log('Continue');
        setShowModal(false);
      }
    }, {
      type: 'warning',
      label: 'Warning',
      onClick: () => {
        console.log('Warning');
        setShowModal(false);
      }
    }, {
      type: 'danger',
      label: 'Close',
      onClick: () => {
        console.log('Close');
        setShowModal(false);
      }
    }
  ];


  return (
    <div className="App">
      <Modal
        show={showModal}
        title={"Modal"}
        onClose={() => setShowModal(false)}
        buttons={modalButtons}
      >
        <h1>Custom Modal</h1>
      </Modal>

      {showSuccessAlert && (<Alert
        type={'success'}
        clickDismissable
        onDismiss={() => setShowSuccessAlert(false)}
      >This is success</Alert>)}

      <div className="buttons">

      </div>
    </div>
  )
}

export default App;
