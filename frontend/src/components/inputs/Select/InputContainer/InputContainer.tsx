"use client";
import styles from "./inputContainer.module.css";

import { FaChevronDown } from "react-icons/fa6";

interface IInputContainerProps {
  isOpen: boolean;
  toggleSelect: () => void;
  disabled: boolean;
  children: React.ReactNode;
  readOnly?: boolean;
}
const InputContainer: React.FC<IInputContainerProps> = ({
  isOpen,
  toggleSelect,
  disabled,
  readOnly,
  children,
}) => {
  const isOpenedClass = isOpen ? styles.opened : styles.closed;
  const disabledClass = disabled ? styles.disabled : "";
  const readonlyClass = readOnly ? styles.readonly : "";

  return (
    <div
      className={`${isOpenedClass} ${disabledClass} ${readonlyClass} ${styles.container}`}
      onClick={() => {
        if (disabled || readOnly) return;
        toggleSelect();
      }}
    >
      {children}
      <FaChevronDown color="#00000040" className="arrow-icon" size={12} />
    </div>
  );
};
export default InputContainer;
