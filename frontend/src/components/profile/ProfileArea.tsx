"use client";

import ProfilePhoto from "@/components/profile/ProfilePhoto/ProfilePhoto";
import SectionDivider from "@/components/SectionDivider/SectionDivider";
import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { LuImages } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { IconType } from "react-icons";
import { HiOutlineUserRemove } from "react-icons/hi";
import { TbCancel } from "react-icons/tb";
import Topic from "@/components/Topic/Topic";
import styles from "./profilearea.module.css";

interface ITopic {
    icon: IconType;
    text: string;
}
interface IProfileTopics extends ITopic {
    href: string;
}

interface IFriendTopic extends ITopic {
    text: string;
    icon: IconType;
    onClick: VoidFunction;
}

interface IProfileAreaProps {
    friendProfileId?: string;
}

const links: IProfileTopics[] = [
    { href: "/perfil", text: "Meu perfil", icon: FaRegUser },
    { href: "/recados", text: "Recados", icon: MdOutlineMail },
    { href: "/galeria", text: "Galeria", icon: LuImages },
    { href: "/depoimentos", text: "Depoimentos", icon: BsChatLeftText },
];

function ProfileArea({ friendProfileId }: IProfileAreaProps) {
    const undoFriendship = () => {
        console.log("undo", friendProfileId);
    };
    const onReport = () => {
        console.log("report", friendProfileId);
    };
    const friendTopics: IFriendTopic[] = [
        {
            text: "Desfazer amizade",
            icon: HiOutlineUserRemove,
            onClick: undoFriendship,
        },
        { text: "Denunciar", icon: TbCancel, onClick: onReport },
    ];
    return (
        <>
            <ProfilePhoto
                src="https://images.unsplash.com/photo-1773493017440-a173056a728f?q=80&w=600&h=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                liveIn="Brasil"
                sex="F"
                userName="Mônica"
                relationship="solteira"
            />
            {friendProfileId && (
                <>
                    <SectionDivider width="90%" />
                    <div className={styles.topicscontainer}>
                        {friendTopics.map((item) => (
                            <Topic
                                key={item.text}
                                icon={{ svg: item.icon, color: "#FF3737" }}
                                text={item.text}
                                onClick={item.onClick}
                            />
                        ))}
                    </div>
                </>
            )}
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
