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
    { title: "Maria", imageSrc: MOCKED_IMG_SRC, link: "/amigos" },
    { title: "Joana", imageSrc: MOCKED_IMG_SRC, link: "/amigos" },
    { title: "Daniel", imageSrc: MOCKED_IMG_SRC_1, link: "/amigos" },
    { title: "Marina", imageSrc: MOCKED_IMG_SRC, link: "/amigos" },
    { title: "Fernanda", imageSrc: MOCKED_IMG_SRC, link: "/amigos" },
    { title: "Danilo", imageSrc: MOCKED_IMG_SRC_1, link: "/amigos" },
    { title: "Marta", imageSrc: MOCKED_IMG_SRC, link: "/amigos" },
    { title: "Ana", imageSrc: MOCKED_IMG_SRC, link: "/amigos" },
    { title: "André", imageSrc: MOCKED_IMG_SRC_1, link: "/amigos" },
];

const IMG =
    "https://images.unsplash.com/photo-1478958813546-b8bd142c3202?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWF3bnxlbnwwfHwwfHx8MA%3D%3D";

const communities: IContent[] = [
    { title: "eu odeio acordar cedo", imageSrc: IMG, link: "/comunidades" },
    { title: "abc", imageSrc: IMG, link: "/comunidades" },
    { title: "efg", imageSrc: IMG, link: "/comunidades" },
    { title: "hij", imageSrc: IMG, link: "/comunidades" },
    { title: "klm", imageSrc: IMG, link: "/comunidades" },
    { title: "nop", imageSrc: IMG, link: "/comunidades" },
    { title: "qrs", imageSrc: IMG, link: "/comunidades" },
    { title: "tuv", imageSrc: IMG, link: "/comunidades" },
    { title: "wxy", imageSrc: IMG, link: "/comunidades" },
];

function RightPanelLayout({ children }: IRightPanelLayoutProps) {
    return (
        <>
            {children}
            <aside className={`${styles.interests} ${styles.contentcontainer}`}>
                <DefaultContentBox>
                    <AsideContent
                        title="Amigos"
                        actionLink={{
                            href: "/amigos",
                        }}
                        content={friends}
                    />
                </DefaultContentBox>
                <DefaultContentBox>
                    <AsideContent
                        actionLink={{
                            href: "/comunidades",
                        }}
                        title="Comunidades"
                        content={communities}
                    />
                </DefaultContentBox>
            </aside>
        </>
    );
}

export default RightPanelLayout;
