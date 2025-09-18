import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InterestForm from "@/components/InterestForm";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
        <InterestForm />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;