import type { FC, ReactNode } from "react";
import type { AlertType } from "../../types.ts";
import Button from "../Button/Button.tsx";
import { motion } from "framer-motion";

interface AlertProps {
  type: AlertType;
  onDismiss?: () => void;
  clickDismissable?: boolean;
  children: ReactNode;
}

const Alert: FC<AlertProps> = (AlertProps) => {
  const {
    type,
    onDismiss,
    clickDismissable,
    children
  } = AlertProps;

  const handleAlertClick = () => {
    if (clickDismissable && onDismiss) {
      onDismiss();
    }
  };

  return (
    <motion.div
      className={`alert alert-${type} d-flex justify-content-between align-items-center`}
      onClick={handleAlertClick}
      style={{cursor: clickDismissable && onDismiss ? 'pointer' : 'default'}}
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: .3}}
      exit={{ opacity: 0, scale: 0.95, height: 0, marginBottom: 0, padding: 0 }}
    >
      <div className="alert-message">
        {children}
      </div>

      {onDismiss && !clickDismissable && (
        <Button
          type="button"
          className="btn-close"
          aria-label="Close"
          clickHandler={(e) => {
            e.stopPropagation();
            onDismiss();
          }}
        />
      )}
    </motion.div>
  );
};

export default Alert;