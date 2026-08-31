import DefaultContentBox from "@/components/DefaultContentBox/DefaultContentBox";
import React, { ReactNode } from "react";
import { IContent } from "@/interfaces/AsideContentProps";
import styles from "./rightpanel.module.css";
import AsideContent from "@/components/AsideContent/AsideContent";

interface IRightPanelLayoutProps {
    children: ReactNode;
}

const MOCKED_IMG_SRC =
    "https://images.unsplash.com/photo-1786908432787-3d7747c0707d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D";
const MOCKED_IMG_SRC_1 =
    "https://images.unsplash.com/photo-1783426154439-c7b7f90f0e95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExOHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8";

const friends: IContent[] = [
    { title: "Maria", imageSrc: MOCKED_IMG_SRC },
    { title: "Joana", imageSrc: MOCKED_IMG_SRC },
    { title: "Daniel", imageSrc: MOCKED_IMG_SRC_1 },
    { title: "Marina", imageSrc: MOCKED_IMG_SRC },
    { title: "Fernanda", imageSrc: MOCKED_IMG_SRC },
    { title: "Danilo", imageSrc: MOCKED_IMG_SRC_1 },
    { title: "Marta", imageSrc: MOCKED_IMG_SRC },
    { title: "Ana", imageSrc: MOCKED_IMG_SRC },
    { title: "André", imageSrc: MOCKED_IMG_SRC_1 },
];

function RightPanelLayout({ children }: IRightPanelLayoutProps) {
    return (
        <>
            {children}
            <aside className={`${styles.interests} ${styles.contentcontainer}`}>
                <DefaultContentBox>
                    <AsideContent
                        actionLink={{
                            href: "/amigos",
                        }}
                        content={friends}
                        title="Amigos"
                    />
                </DefaultContentBox>
                <DefaultContentBox>communities</DefaultContentBox>
            </aside>
        </>
    );
}

export default RightPanelLayout;
