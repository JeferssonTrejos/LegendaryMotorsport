const CarCard = ({ vehicle, viewMode }) => {
  const { type, url_img, model, price, action } = vehicle;

  // Determinar el color del badge según el tipo
  // Determinar el color del badge según el tipo
  const getBadgeColor = (type) => {
    // Por ahora todos usan el mismo color, pero mantenemos la función para futura extensibilidad
    return "text-custom-red-1";
  };

  if (viewMode === "list") {
    return (
      <div className="group flex flex-col lg:flex-row bg-custom-black-2 rounded-lg overflow-hidden hover:bg-custom-black-3 transition-colors">
        {/* Imagen */}
        <div className="w-full lg:w-96 h-64 lg:h-auto shrink-0 overflow-hidden relative">
          <img
            src={url_img}
            alt={model}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Contenido */}
        <div className="flex-1 p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <span className={`text-xs font-semibold tracking-wider ${getBadgeColor(type)}`}>
              {type}
            </span>
            <h3 className="text-2xl font-bold text-custom-white-1 mt-2">
              {model}
            </h3>
            <p className="text-custom-white-1 font-bold text-lg mt-2">{price}</p>
          </div>

          <button className="w-full lg:w-auto border border-custom-white-1 text-custom-white-1 px-8 py-3 rounded hover:bg-custom-white-1 hover:text-custom-black-1 transition-colors font-medium">
            {action}
          </button>
        </div>
      </div>
    );
  }

  // Vista de cuadrícula (grid)
  return (
    <div className="bg-custom-black-2 rounded-lg overflow-hidden hover:bg-custom-black-3 transition-colors group">
      {/* Imagen */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={url_img}
          alt={model}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Contenido */}
      <div className="p-4">
        <span className={`text-xs font-semibold tracking-wider ${getBadgeColor(type)}`}>
          {type}
        </span>
        <h3 className="text-lg font-semibold text-custom-white-1 mt-1">
          {model}
        </h3>

        <div className="flex items-center justify-between mt-4">
          <p className="text-custom-white-1 font-bold">{price}</p>
          <button className="border border-custom-white-1 text-custom-white-1 px-4 py-2 rounded hover:bg-custom-white-1 hover:text-custom-black-1 transition-colors text-sm">
            {action}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
