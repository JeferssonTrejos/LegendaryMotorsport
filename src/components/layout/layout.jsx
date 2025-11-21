import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="bg-custom-black-1">
      <Header />
      <main className="flex-1 overflow-y-auto pt-16 min-h-dvh">
        {children}
      </main>
      <Footer />
    </div>
  );
};
