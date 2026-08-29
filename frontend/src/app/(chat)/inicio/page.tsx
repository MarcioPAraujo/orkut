import DefaultContentBox from "@/components/DefaultContentBox/DefaultContentBox";
import styles from "./home.module.css";
import ProfileArea from "@/components/profile/ProfileArea";

const IntialPage = () => {
    return (
        <div className={styles.container}>
            <DefaultContentBox>
                <ProfileArea />
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
