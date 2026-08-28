"use client";

import ProfilePhoto from "@/components/ProfilePhoto/ProfilePhoto";
import SectionDivider from "@/components/SectionDivider/SectionDivider";
import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { LuImages } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { IconType } from "react-icons";
import Topic from "@/components/Topic/Topic";
import styles from "./home.module.css";

interface ITopics {
    icon: IconType;
    text: string;
    href: string;
}

const links: ITopics[] = [
    { href: "/perfil", text: "Meu perfil", icon: FaRegUser },
    { href: "/recados", text: "Recados", icon: MdOutlineMail },
    { href: "/galeria", text: "Galeria", icon: LuImages },
    { href: "/depoimentos", text: "Depoimentos", icon: BsChatLeftText },
];

function ProfileArea() {
    return (
        <>
            <ProfilePhoto
                src="https://images.unsplash.com/photo-1773493017440-a173056a728f?q=80&w=600&h=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                liveIn="Brasil"
                sex="F"
                userName="Mônica"
                relationship="solteira"
            />
            <SectionDivider width="90%" />
            <div className={styles.topicscontainer}>
                {links.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Topic
                            key={item.text}
                            icon={{ svg: Icon }}
                            text={item.text}
                            link={item.href}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default ProfileArea;
