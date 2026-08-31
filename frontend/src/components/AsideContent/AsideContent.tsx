"use client";

import { AsideContentProps } from "@/interfaces/AsideContentProps";
import Link from "next/link";
import React from "react";
import styles from "./asidecontent.module.css";

function AsideContent({
    actionLink,
    content,
    title,
    subtitle,
}: AsideContentProps) {
    return (
        <div className={styles.container}>
            <div className={styles.titlecontainer}>
                <h3 className={styles.title}>{title}</h3>
                <Link href={actionLink.href} className={styles.action}>
                    {actionLink.label || "Ver todos"}
                </Link>
            </div>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <div className={styles.imagescontainer}>
                {content.map((item) => (
                    <div key={item.title} className={styles.imagewrapper}>
                        {item.imageSrc && <img src={item.imageSrc} />}
                        {!item.imageSrc && <div />}
                        <div className={styles.textcontainer}>
                            <span>{item.title}</span>
                            {item.counter && <span>({item.counter})</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AsideContent;
