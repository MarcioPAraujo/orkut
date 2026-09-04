import Link from "next/link";
import React from "react";
import styles from "./newsbox.module.css";
import { MdOutlineMail } from "react-icons/md";
import { LuImages } from "react-icons/lu";

function Newsbox() {
    return (
        <div className={styles.profileinfo}>
            <h1 className={styles.title}>Olá, Mônica</h1>
            <div className={styles.news}>
                <span>
                    <MdOutlineMail size={18} />3 novos recados
                </span>
                <span>
                    <LuImages size={18} />6 novos comentarios
                </span>
            </div>
            <div className={styles.views}>
                <p className={styles.topictitle}>Visualização de seu perfil</p>
                <span className={styles.info}>
                    Desde a criação da sua conta: <strong>12345</strong>
                </span>
                <span className={styles.info}>
                    Este mês: <strong>123</strong>
                </span>
                <span className={styles.info}>
                    Ontem: <strong>23</strong>
                </span>
            </div>
            <div>
                <p className={styles.topictitle}>Últimos visitantes</p>
                <span className={styles.info}>
                    <Link href="/amigos">Luana</Link>,&nbsp;
                    <Link href="/amigos">João</Link>,&nbsp;
                    <Link href="/amigos">Ursola</Link>
                </span>
            </div>
            <div>
                <p className={styles.topictitle}>Sorte de hoje</p>
                <p className={styles.info}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsam cumque doloribus id quo perferendis officia ab facere
                    debitis eaque ut.
                </p>
            </div>
        </div>
    );
}

export default Newsbox;
