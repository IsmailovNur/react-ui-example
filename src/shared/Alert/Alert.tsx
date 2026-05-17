import type { FC, ReactNode } from "react";
import type { AlertType } from "../../types.ts";
import Button from "../Button/Button.tsx";

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
      console.log('dismiss')
      onDismiss();
    }
  };

  return (
    <div
      className={`alert alert-${type} d-flex justify-content-between align-items-center`}
      onClick={handleAlertClick}
      style={{cursor: clickDismissable && onDismiss ? 'pointer' : 'default'}}
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
    </div>
  );
};

export default Alert;