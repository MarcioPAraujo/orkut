"use client";

import { CiSearch } from "react-icons/ci";

import React, { ChangeEvent } from "react";
import styles from "./searchbar.module.css";

interface SearchbarProps {
  searchValue: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Searchbar({
  onChange,
  searchValue,
  placeholder = "buscar",
}: SearchbarProps) {
  return (
    <div className={styles.container}>
      <CiSearch size={24} />
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={onChange}
      />
    </div>
  );
}

export default Searchbar;
