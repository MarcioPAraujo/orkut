"use client";

import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./select.module.css";
import SelectOptions from "./SelectOptions/SelectOptions";
import InputContainer from "./InputContainer/InputContainer";
import { IOption } from "@/interfaces/Option";
import { useFilteredOptions } from "@/hook/useFilterOptions";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface ISelectProps<T> {
  id: string;
  options: IOption<T>[];
  selectedOption: IOption<T> | Partial<IOption<T>> | undefined | null;
  onChange?: (option: IOption<T>) => void;
  placeholder: string;
  disabled?: boolean;
  readonly?: boolean;
  label?: string;
  enableSearch?: boolean;
  error?: string | undefined;
  emptyListMessage?: string;
  optionInputType?: "checkbox" | "radio";
}

const Select = <T,>({
  id,
  options,
  selectedOption,
  onChange,
  placeholder,
  disabled = false,
  readonly = false,
  label,
  enableSearch = false,
  emptyListMessage,
  error,
  optionInputType = "radio",
}: ISelectProps<T>) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [openDirection, setOpenDirection] = useState<"up" | "down">("down");
  const filteredOptions = useFilteredOptions(options, searchValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setSearchValue("");
        setIsOpen(false);
      }
    };
    const handleScroll = () => {
      if (selectRef.current) {
        const rect = selectRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        if (spaceBelow < 200 && spaceAbove > spaceBelow) {
          setOpenDirection("up");
        } else {
          setOpenDirection("down");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [setIsOpen]);

  const handleOptionClick = (option: IOption<T>) => {
    onChange?.(option);
    setIsOpen(false);
    setSearchValue("");
  };

  const toggleSelect = () => {
    if (isOpen) {
      setSearchValue("");
    }
    setIsOpen(!isOpen);
  };

  const renderSearchBar = () => {
    // render search input
    if (enableSearch && isOpen) {
      return (
        <div
          className={styles.inputWrapper}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <CiSearch color="#00000040" size={20} />
          </div>
          <input
            className={styles.input}
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Pesquisar..."
          />
        </div>
      );
    }

    // render selected option
    if (selectedOption?.label) {
      return (
        <span className={styles.selectedOption}>{selectedOption.label}</span>
      );
    }

    // render placeholder
    return <span className={styles.placeholder}>{placeholder}</span>;
  };

  const openClassname = isOpen ? styles.opened : "";

  return (
    <div className={`${openClassname} ${styles.container} select-component`}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.selectArea} ref={selectRef}>
        <InputContainer
          disabled={disabled}
          isOpen={isOpen}
          toggleSelect={toggleSelect}
          readOnly={readonly}
        >
          {renderSearchBar()}
        </InputContainer>
        <ErrorMessage message={error} />

        {isOpen && (
          <SelectOptions
            id={id}
            options={filteredOptions}
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
            openDirection={openDirection}
            emptyListMessage={emptyListMessage}
            inputType={optionInputType}
          />
        )}
      </div>
    </div>
  );
};
export default Select;
