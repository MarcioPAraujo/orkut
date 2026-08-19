"use client";

import styles from "./defaultButton.module.css";

interface DefaultButtonProps {
  label: string;
  type?: "button" | "submit";
  onClick?: VoidFunction;
  width?: string;
  height?: string;
  variant?: "default" | "redOutlined";
  disabled?: boolean;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  label,
  height,
  variant = "default",
  width,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ height, width }}
      className={`${styles.base}  ${styles[variant]}`}
    >
      {label}
    </button>
  );
};
