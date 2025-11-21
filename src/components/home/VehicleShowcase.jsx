
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import { TitleSection } from './TitleSection';

const VehicleShowcase = () => {
  const { title, options } = data.home.Our_vehicles;

  return (
    <section className="bg-custom-black-2 border-b-2 border-t-2 border-custom-black-4  py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TitleSection
          title={title}
          subtitle="Elige el vehículo que mejor se adapte a tu estilo de vida." />

        {/* Grid de Vehículos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((vehicle, index) => {
            const isRecommended = vehicle.type === 'SUV';

            return (
              <div
                key={index}
                className={`p-8 relative border-2 hover:border-custom-red-3 transition-colors
                  ${isRecommended ?
                    'bg-custom-black-3 border-custom-red-1 '
                    : 'bg-custom-black-1  border-custom-black-3 '
                  }`}
              >
                {/* Badge Recomendado */}
                {isRecommended && (
                  <div className="absolute top-0 right-0 bg-custom-red-1 text-custom-white-1 px-4 py-1 text-xs font-bold ">
                    RECOMENDADO
                  </div>
                )}

                {/* Tipo de Vehículo */}
                <h3 className="text-2xl font-bold text-custom-white-1 mb-2">
                  {vehicle.type}
                </h3>

                {/* Precio */}
                <p className="text-3xl font-bold text-custom-red-2 mb-6">
                  {vehicle.detail}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {vehicle.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-custom-white-3 text-base"
                    >
                      <span className="text-custom-red-1 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón */}
                <Link
                  to={`/catalogo?tipo=${vehicle.type.toLowerCase()}`}
                  className="block w-full bg-custom-white-1 text-custom-black-1 text-center py-2 rounded font-semibold hover:bg-custom-white-3 transition-colors"
                >
                  Ver Detalles
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;