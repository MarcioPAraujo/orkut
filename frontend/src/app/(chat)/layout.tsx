"use client";

import PageHeader from "@/components/PageHeader/PageHeader";

interface RootLayoutProps {
  children: React.ReactNode;
}

const Contacts = ({ children }: RootLayoutProps) => {
  return (
    <>
      <PageHeader />
      <main>{children}</main>
      <footer>info links</footer>
    </>
  );
};
export default Contacts;
