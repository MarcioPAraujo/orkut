import DefaultContentBox from "@/components/DefaultContentBox/DefaultContentBox";
import styles from "./home.module.css";
import ProfilePhoto from "@/components/ProfilePhoto/ProfilePhoto";
import SectionDivider from "@/components/SectionDivider/SectionDivider";

const IntialPage = () => {
    return (
        <div className={styles.container}>
            <DefaultContentBox>
                <ProfilePhoto
                    src="https://images.unsplash.com/photo-1773493017440-a173056a728f?q=80&w=600&h=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    liveIn="Brasil"
                    sex="F"
                    userName="Mônica"
                    relationship="solteira"
                />
                <SectionDivider width="90%" />
            </DefaultContentBox>
            <div className={`${styles.profileinfo} ${styles.contentcontainer}`}>
                <DefaultContentBox>profile info</DefaultContentBox>
                <DefaultContentBox>profile info</DefaultContentBox>
                <DefaultContentBox>profile info</DefaultContentBox>
            </div>
            <div className={`${styles.interests} ${styles.contentcontainer}`}>
                <DefaultContentBox>friends</DefaultContentBox>
                <DefaultContentBox>communities</DefaultContentBox>
            </div>
        </div>
    );
};
export default IntialPage;
