import DefaultContentBox from "@/components/DefaultContentBox/DefaultContentBox";
import styles from "./home.module.css";
import Newsbox from "./Newsbox";
import NewTestimonials from "./NewTestimonials";

const IntialPage = () => {
    return (
        <div className={styles.contentcontainer}>
            <DefaultContentBox>
                <Newsbox />
            </DefaultContentBox>
            <DefaultContentBox>
                <NewTestimonials />
            </DefaultContentBox>
            <DefaultContentBox>profile info</DefaultContentBox>
        </div>
    );
};
export default IntialPage;
