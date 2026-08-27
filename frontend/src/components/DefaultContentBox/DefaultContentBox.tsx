import React from "react";
import styles from "./defaultcontenbox.module.css";

interface IDefaultContentBoxProps {
  children: React.ReactNode;
}

function DefaultContentBox({ children }: IDefaultContentBoxProps) {
  return <div className={styles.box}>{children}</div>;
}

export default DefaultContentBox;
