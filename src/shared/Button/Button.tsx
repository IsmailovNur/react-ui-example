import type { FC, ReactNode } from "react";

type ButtonType = "submit" | "reset" | "button" | undefined;

interface ButtonProps extends React.PropsWithChildren {
  children?: ReactNode;
  className?: string;
  clickHandler?: () => void;
  type?: ButtonType;
}

const Button: FC<ButtonProps> = (props) => {
  const {children, className, clickHandler, type} = props;

  return (
    <button
      type={type}
      className={`ingredient-btn ${className}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;