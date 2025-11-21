import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Catálogo", path: "/catalog" },
    { name: "Ofertas", path: "/offers" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-custom-black-1-60 text-custom-white-3 fixed w-full top-0 z-50 border-b-2 border-custom-black-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link to="/" className="shrink-0">
            <div className="text-xl font-bold flex flex-col ">
              <span className="text-custom-white-1 italic -mb-1">LEGENDARY</span>
              <span className="text-custom-red-2 italic -mt-1">MOTORSPORT</span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${isActive(link.path) ? "text-red-600" : "text-gray-300"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-custom-white-3 hover:text-white hover:bg-custom-black-3"
          >
            <span className="sr-only">Abrir menú</span>
            <MenuIcon className="block h-6 w-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-custom-black-2 px-6 sm:max-w-sm ">
            <div className="h-16 flex justify-between items-center border-b-2 border-custom-black-4">
              <Link to="/" className="shrink-0">
                <div className="text-xl font-bold flex flex-col ">
                  <span className="text-custom-white-1 italic -mb-1">LEGENDARY</span>
                  <span className="text-custom-red-2 italic -mt-1">MOTORSPORT</span>
                </div>
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-custom-white-3 hover:text-white hover:bg-custom-black-3"
              >
                <span className="sr-only">Abrir menú</span>
                <XIcon className="block h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.path)
                    ? "text-custom-red-1 bg-custom-black-3"
                    : "text-custom-white-3 hover:text-custom-red-1"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
