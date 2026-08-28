import React from "react";
import styles from "./sectiondivider.module.css";

interface ISectionDividerProps {
    width?: string;
}
function SectionDivider({ width }: ISectionDividerProps) {
    return <hr className={styles.line} style={{ width }} />;
}

export default SectionDivider;
