import React from "react";

export const ToastContext = React.createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const removeToast = React.useCallback((id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  }, []);

  const addNewToast = React.useCallback((message, variant) => {
    const id = Date.now();
    const next = { id, message, type: variant };

    setToasts((toasts) => [...toasts, next]);
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addNewToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}
