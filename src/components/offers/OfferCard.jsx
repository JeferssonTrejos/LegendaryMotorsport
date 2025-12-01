const OfferCard = ({ title, price, oldPrice, img, expires, stock }) => {
  return (
    <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-[1.01] transition duration-200">
      <img src={img} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="font-semibold text-lg text-white">{title}</h3>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-red-500 text-xl font-bold">{price}</span>
          <span className="line-through text-gray-500 text-sm">{oldPrice}</span>
        </div>

        <p className="text-sm text-gray-400 mt-1">Expira en {expires}</p>

        <p className="text-green-400 text-sm mt-1">{stock}</p>

        <button className="w-full mt-4 py-2 bg-gray-900 text-white rounded-md border border-gray-700 hover:bg-gray-800 transition">
          Reservar Ahora
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
