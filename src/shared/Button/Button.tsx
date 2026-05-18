import type {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode
} from "react";

type ButtonType = "submit" | "reset" | "button" | undefined;

interface ButtonProps extends PropsWithChildren {
  children?: ReactNode;
  className?: string;
  clickHandler?: MouseEventHandler;
  type?: ButtonType;
}

const Button: FC<ButtonProps> = (props) => {
  const {children, className, clickHandler, type} = props;

  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;