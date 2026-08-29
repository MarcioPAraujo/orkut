import DefaultContentBox from "@/components/DefaultContentBox/DefaultContentBox";
import ProfileArea from "@/components/profile/ProfileArea";
import { ReactNode } from "react";
import styles from "./profile.module.css";

interface ILayoutProps {
    children: ReactNode;
}

const MyProfileLayout = ({ children }: ILayoutProps) => {
    return (
        <div className={styles.container}>
            <DefaultContentBox>
                <ProfileArea />
            </DefaultContentBox>
            {children}
        </div>
    );
};

export default MyProfileLayout;
