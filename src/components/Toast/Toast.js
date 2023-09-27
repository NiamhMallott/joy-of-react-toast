import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, type, children }) {
  const { removeToast } = React.useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.iconContainer}>
        <Icon type={type} size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button
        aria-label="Dismiss message"
        aria-live="off"
        className={styles.closeButton}
        onClick={() => {
          removeToast(id);
        }}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;

function Icon({ type, ...delegated }) {
  switch (type) {
    case "notice":
      return <ICONS_BY_VARIANT.notice {...delegated} />;

    case "warning":
      return <ICONS_BY_VARIANT.warning {...delegated} />;

    case "success":
      return <ICONS_BY_VARIANT.success {...delegated} />;

    case "error":
      return <ICONS_BY_VARIANT.error {...delegated} />;

    default:
      return <Info {...delegated} />;
  }
}
