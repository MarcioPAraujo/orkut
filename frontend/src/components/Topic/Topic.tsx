"use client";

import Link from "next/link";
import React, { ElementType, SVGProps } from "react";
import styles from "./topic.module.css";
import { IconType } from "react-icons";

interface ITopicProps {
    link?: string;
    onClick?: VoidFunction;
    icon: {
        svg: IconType;
        color?: string;
    };
    text: string;
}

function Topic({ icon, link, onClick, text }: ITopicProps) {
    const Icon = icon.svg;
    if (link) {
        return (
            <Link href={link} className={styles.topic}>
                <Icon color={icon.color || "#ED2590"} />
                {text}
            </Link>
        );
    }
    if (onClick) {
        return (
            <button
                type="button"
                className={`${styles.topic} ${styles.button}`}
                onClick={onClick}
            >
                <Icon color={icon.color || "#ED2590"} />
                {text}
            </button>
        );
    }
    return null;
}

export default Topic;
