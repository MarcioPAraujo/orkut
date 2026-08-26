import Link from "next/link";
import React from "react";
import styles from "./pagefooter.module.css";

interface ILink {
  label: string;
  path: string;
}

const links: ILink[] = [
  { label: "Sobre o Orkut", path: "/sobre" },
  { label: "Novidades", path: "/novidades" },
  { label: "Termos de uso", path: "/termos-de-uso" },
  { label: "Políticas de Privacidade", path: "/politicas-de-privacidade" },
  { label: "Ajuda", path: "/ajuda" },
];

function PageFooter() {
  const getAllRightsReserved = () => {
    const currentYear = new Date().getFullYear();
    const allRightsReserved = "Todos direitos reservados";
    if (currentYear === 2022) {
      return `${currentYear}. ${allRightsReserved}`;
    }
    return `2022 - ${currentYear}. ${allRightsReserved}`;
  };
  return (
    <footer className={styles.footerContainer}>
      <h1 className={styles.title}>Orkut</h1>
      <div className={styles.info}>
        <div className={styles.linksContainer}>
          {links.map((item) => (
            <Link key={item.path} href={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <p className={styles.rights}>{getAllRightsReserved()}</p>
        </div>
      </div>
    </footer>
  );
}

export default PageFooter;
