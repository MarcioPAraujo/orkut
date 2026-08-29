import React from "react";
import styles from "./proflephoto.module.css";

interface IProfilePhotoProps {
    src?: string;
    userName: string;
    relationship: string;
    sex: "M" | "F";
    liveIn: string;
}
function ProfilePhoto({
    liveIn,
    relationship,
    sex,
    userName,
    src,
}: IProfilePhotoProps) {
    const isMale = sex === "M";
    return (
        <div className={styles.container}>
            {src && (
                <img src={src} alt={userName} className={styles.userphoto} />
            )}
            {!src && <div className={styles.emptyphoto} />}
            <div className={styles.infocontainer}>
                <p className={styles.name}>{userName}</p>
                <p>
                    {isMale ? "Masculino" : "Feminino"}, {relationship}
                </p>
                <p>{liveIn}</p>
            </div>
        </div>
    );
}

export default ProfilePhoto;
