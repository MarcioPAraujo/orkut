/* eslint-disable comma-spacing */
import { IOption } from "@/interfaces/Option";
import { IoIosCheckmark } from "react-icons/io";
import styles from "./selectOptions.module.css";

interface Option<T> {
  options: IOption<T>[];
  handleOptionClick: (option: IOption<T>) => void;
  selectedOption: IOption<T> | Partial<IOption<T>> | undefined | null;
  openDirection: "up" | "down";
  id: string;
  emptyListMessage?: string;
  inputType: "checkbox" | "radio";
}
const SelectOptions = <T,>({
  id,
  options,
  selectedOption,
  handleOptionClick,
  inputType = "radio",
  openDirection,
  emptyListMessage,
}: Option<T>) => {
  const isSelected = (option: IOption<T>) => {
    if (!selectedOption) return false;
    return selectedOption?.value === option.value;
  };

  const openClassname = openDirection === "up" ? styles.openUp : "";

  return (
    <div className={`${styles.options} ${openClassname}`}>
      <div className={styles.optionsContainer}>
        {emptyListMessage && options.length === 0 && (
          <abbr title={emptyListMessage}>
            <label className={styles.optionLabel}>
              <span className={styles.optionText}>{emptyListMessage}</span>
            </label>
          </abbr>
        )}
        {options.map((option, idx) => (
          <label
            className={styles.optionLabel}
            key={`${option.label}-${idx}`}
            htmlFor={`${option.label}-${idx}`}
          >
            <input
              className={styles.radioInput}
              id={`${option.label}-${idx}`}
              type={inputType}
              name={id}
              checked={isSelected(option)}
              onChange={() => handleOptionClick(option)}
            />
            <span className={styles.optionText}>{option.label}</span>
            <IoIosCheckmark />
          </label>
        ))}
      </div>
    </div>
  );
};
export default SelectOptions;
