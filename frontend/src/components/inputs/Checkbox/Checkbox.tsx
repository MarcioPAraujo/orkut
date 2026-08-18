import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { IoIosCheckmark } from "react-icons/io";
import styles from "./checkbox.module.css";

interface CheckboxProps {
  label: string;
  id: string;
  register: UseFormRegisterReturn;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, label, register }) => {
  return (
    <label htmlFor={id} className={styles.rememberMe}>
      <div className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id={id}
          {...register}
        />
        <IoIosCheckmark />
      </div>
      {label}
    </label>
  );
};
