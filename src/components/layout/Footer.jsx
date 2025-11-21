import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  const vehicleCategories = [
    { name: 'Deportivos' },
    { name: 'SUVs' },
    { name: 'Eléctricos' },
    { name: 'Motocicletas' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
  ];

  return (
    <footer className="bg-custom-black-1 text-custom-white-1 border-t border-custom-black-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y Descripción */}
          <div className="space-y-4">
            <Link to="/" className="shrink-0">
              <div className="text-xl font-bold flex flex-col ">
                <span className="text-custom-white-1 italic -mb-1">LEGENDARY</span>
                <span className="text-custom-red-2 italic -mt-1">MOTORSPORT</span>
              </div>
            </Link>
            <p className="text-custom-white-4 text-sm leading-relaxed max-w-xs">
              Líderes en la venta de vehículos premium. Calidad, garantía y el mejor servicio post-venta del mercado
            </p>
          </div>

          {/* Vehículos */}
          <div>
            <h3 className="text-custom-white-1 font-semibold text-lg mb-4">
              VEHÍCULOS
            </h3>
            <ul className="space-y-3">
              {vehicleCategories.map((category) => (
                <li key={category.name}>
                  <span
                    className="text-custom-white-5 text-sm hover:text-custom-red-1 transition-colors cursor-pointer"
                  >
                    {category.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-custom-white-1 font-semibold text-lg mb-4">
              SÍGUENOS
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom-white-5 text-sm hover:text-custom-red-1 transition-colors cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-custom-black-3 mt-8 pt-8">
          <p className="text-custom-white-5 text-sm text-center">
            @2025 Legendary Motorsport. Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;