import React from "react";
import classNames from "classnames";

export enum AlertType {
  Success = "success",
  Default = "default",
  Danger = "danger",
  Warning = "warning",
}

interface BaseAlertProps {
  className?: string;
  altType?: AlertType;
  message: string;
  title?: string;
  onClose: () => void;
  showCloseButton?: boolean;
}

const alert = (props: BaseAlertProps) => {
  const {
    message = "This is an alert",
    className,
    altType,
    onClose,
    title,
    showCloseButton = true,
  } = props;
  const classes = classNames("alt", className, {
    [`alt-${altType}`]: altType,
  });
  return (
    <div className={classes}>
      {title && <h4>{title}</h4>}
      <p>{message}</p>
      {showCloseButton && (
        <button className="alt-button" onClick={onClose}>
          X
        </button>
      )}
    </div>
  );
};

export default alert;
