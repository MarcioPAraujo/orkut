import DefaultContentBox from "@/components/DefaultContentBox/DefaultContentBox";
import styles from "./home.module.css";

const IntialPage = () => {
    return (
        <>
            <div className={`${styles.profileinfo} ${styles.contentcontainer}`}>
                <DefaultContentBox>profile info</DefaultContentBox>
                <DefaultContentBox>profile info</DefaultContentBox>
                <DefaultContentBox>profile info</DefaultContentBox>
            </div>
        </>
    );
};
export default IntialPage;
