import React from "react";
import styles from "./maincontent.module.css";

interface IMainContentProps {
  children: React.ReactNode;
}

function MainContent({ children }: IMainContentProps) {
  return <main className={styles.content}>{children}</main>;
}

export default MainContent;
