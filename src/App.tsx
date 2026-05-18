import './App.css';
import Modal from "./shared/Modal/Modal.tsx";
import { useState } from "react";
import type { ModalButtonType } from "./types.ts";
import Alert from "./shared/Alert/Alert.tsx";
import Button from "./shared/Button/Button.tsx";
import { AnimatePresence } from "framer-motion";

const App = () => {

  const [showModal, setShowModal] = useState(false);

  const [showPrimaryAlert, setShowPrimaryAlert] = useState(true);
  const [showSuccessAlert, setShowSuccessAlert] = useState(true);
  const [showWarningAlert, setShowWarningAlert] = useState(true);
  const [showDangerAlert, setShowDangerAlert] = useState(true);

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

      <AnimatePresence>
        {showPrimaryAlert && (<Alert
          type={'primary'}
          clickDismissable
          onDismiss={() => setShowPrimaryAlert(false)}
        >This is PrimaryAlert</Alert>)}
      </AnimatePresence>

      <AnimatePresence>
        {showSuccessAlert && (<Alert
          type={'success'}
          clickDismissable
          onDismiss={() => setShowSuccessAlert(false)}
        >This is SuccessAlert</Alert>)}
      </AnimatePresence>

      <AnimatePresence>
        {showWarningAlert && (<Alert
          type={'warning'}
          onDismiss={() => setShowWarningAlert(false)}
        >This is WarningAlert</Alert>)}
      </AnimatePresence>

      <AnimatePresence>
        {showDangerAlert && (<Alert
          type={'danger'}
          onDismiss={() => setShowDangerAlert(false)}
        >This is DangerAlert</Alert>)}
      </AnimatePresence>

      <div className="p-2 text-center d-flex justify-content-center gap-2 flex-wrap">
        <Button
          className="btn-secondary"
          clickHandler={() => setShowModal(true)}
        >Toggle Modal</Button>

        <Button
          className="btn-primary"
          clickHandler={() => setShowPrimaryAlert(prev => !prev)}
        >Toggle Primary Alert</Button>

        <Button
          className="btn-success"
          clickHandler={() => setShowSuccessAlert(prev => !prev)}
        >Toggle Success Alert</Button>

        <Button
          className="btn-warning"
          clickHandler={() => setShowWarningAlert(prev => !prev)}
        >Toggle Warning Alert</Button>

        <Button
          className="btn-danger"
          clickHandler={() => setShowDangerAlert(prev => !prev)}
        >Toggle Danger Alert</Button>
      </div>
    </div>
  )
}

export default App;
