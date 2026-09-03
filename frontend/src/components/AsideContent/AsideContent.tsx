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
                    <Link
                        key={item.title}
                        href={item.link}
                        className={styles.imagewrapper}
                    >
                        {item.imageSrc && <img src={item.imageSrc} />}
                        {!item.imageSrc && (
                            <div className={styles.emptyphoto} />
                        )}
                        <div className={styles.textcontainer}>
                            <span>{item.title}</span>
                            {item.counter && <span>({item.counter})</span>}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default AsideContent;
