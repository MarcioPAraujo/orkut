export interface IContent {
    title: string;
    imageSrc?: string;
    counter?: number;
}

export interface AsideContentProps {
    title: string;
    subtitle?: string;
    actionLink: {
        href: string;
        label?: string;
    };
    content: IContent[];
}
