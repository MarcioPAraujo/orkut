"use client";

import MainContent from "@/components/MainContent/MainContent";
import PageFooter from "@/components/PageFooter/PageFooter";
import PageHeader from "@/components/PageHeader/PageHeader";

interface RootLayoutProps {
  children: React.ReactNode;
}

const Contacts = ({ children }: RootLayoutProps) => {
  return (
    <>
      <PageHeader />
      <MainContent>{children}</MainContent>
      <PageFooter />
    </>
  );
};
export default Contacts;
