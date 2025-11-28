const CarCard = ({ vehicle, viewMode }) => {
  const { type, url_img, model, price, action } = vehicle;

  // Determinar el color del badge según el tipo
  const getBadgeColor = (type) => {
    switch (type?.toUpperCase()) {
      case "DEPORTIVO":
        return "text-custom-red-1";
      case "ELÉCTRICO":
        return "text-custom-red-1";
      case "SUV":
        return "text-custom-red-1";
      case "SEDAN":
        return "text-custom-red-1";
      case "COUPÉ":
        return "text-custom-red-1";
      default:
        return "text-custom-red-1";
    }
  };

  if (viewMode === "list") {
    return (
      <div className="flex bg-custom-black-2 rounded-lg overflow-hidden hover:bg-custom-black-3 transition-colors">
        {/* Imagen */}
        <div className="w-52 h-36 shrink-0 overflow-hidden">
          <img
            src={url_img}
            alt={model}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Contenido */}
        <div className="flex-1 p-4 flex items-center justify-between">
          <div>
            <span className={`text-xs font-semibold tracking-wider ${getBadgeColor(type)}`}>
              {type}
            </span>
            <h3 className="text-lg font-semibold text-custom-white-1 mt-1">
              {model}
            </h3>
            <p className="text-custom-white-1 font-bold mt-2">{price}</p>
          </div>

          <button className="border border-custom-white-1 text-custom-white-1 px-6 py-2 rounded hover:bg-custom-white-1 hover:text-custom-black-1 transition-colors text-sm">
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
