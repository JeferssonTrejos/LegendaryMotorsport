import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="flex-1 overflow-y-auto mt-16 bg-custom-black-1  min-h-dvh">
        {children}
      </main>
      <Footer />
    </div>
  );
};
