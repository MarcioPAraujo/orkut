"use client";

import PageFooter from "@/components/PageFooter/PageFooter";
import PageHeader from "@/components/PageHeader/PageHeader";

interface RootLayoutProps {
  children: React.ReactNode;
}

const Contacts = ({ children }: RootLayoutProps) => {
  return (
    <>
      <PageHeader />
      <main style={{ backgroundColor: "#D9E6F7" }}>{children}</main>
      <PageFooter />
    </>
  );
};
export default Contacts;
