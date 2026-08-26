import Link from "next/link";
import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./pageheader.module.css";
import { usePathname } from "next/navigation";

interface ILinks {
  path: string;
  label: string;
}

const menuLinks: ILinks[] = [
  { label: "Início", path: "/inicio" },
  { label: "Perfil", path: "/perfil" },
  { label: "Recados", path: "/recados" },
  { label: "Amigos", path: "/amigos" },
  { label: "Comunidades", path: "/comunidades" },
  { label: "Feed", path: "/feed" },
];

export default function PageHeader() {
  const pathname = usePathname();
  const getLinkClassname = (menuPath: string) => {
    if (pathname.startsWith(menuPath)) {
      return styles.selctedMenu;
    }
    return styles.menu;
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Orkut</h1>
      <div className={styles.linksContainer}>
        {menuLinks.map((menu) => {
          return (
            <Link
              key={menu.path}
              href={menu.path}
              className={getLinkClassname(menu.path)}
            >
              {menu.label}
            </Link>
          );
        })}
      </div>
      <Searchbar searchValue="fixed" onChange={(e) => "not change"} />
      <Link href="/perfil" className={styles.photoContainer}>
        <img
          className={styles.profilePhoto}
          src="https://images.unsplash.com/photo-1773493017440-a173056a728f?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <p>Mônica</p>
      </Link>
    </header>
  );
}
