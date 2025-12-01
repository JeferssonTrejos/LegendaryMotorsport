import OfferCard from "./OfferCard";

const OffersGrid = () => {
  const cars = [
    {
      title: "Porsche 911 GT3",
      price: "$46,750",
      oldPrice: "$55,000",
      img: "https://i.ibb.co/5xP1bLk/porsche.jpg",
      expires: "2 días",
      stock: "3 unidades disponibles",
    },
    {
      title: "Audi RS3 Sportback",
      price: "$46,750",
      oldPrice: "$55,000",
      img: "https://i.ibb.co/Z6z9V7c/rs3.jpg",
      expires: "2 días",
      stock: "3 unidades disponibles",
    },
    {
      title: "Ford Mustang GT",
      price: "$46,750",
      oldPrice: "$55,000",
      img: "https://i.ibb.co/hV7N8bL/mustang.jpg",
      expires: "2 días",
      stock: "3 unidades disponibles",
    },
    {
      title: "Toyota Supra GR",
      price: "$46,750",
      oldPrice: "$55,000",
      img: "https://i.ibb.co/VSkpNHc/supra.jpg",
      expires: "2 días",
      stock: "3 unidades disponibles",
    },
    {
      title: "Chevrolet Corvette C8",
      price: "$46,750",
      oldPrice: "$55,000",
      img: "https://i.ibb.co/1zPfCpW/c8.jpg",
      expires: "2 días",
      stock: "3 unidades disponibles",
    },
    {
      title: "Nissan GT-R",
      price: "$46,750",
      oldPrice: "$55,000",
      img: "https://i.ibb.co/z5hGQz7/gtr.jpg",
      expires: "2 días",
      stock: "3 unidades disponibles",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <OfferCard key={index} {...car} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 border border-gray-700 text-white rounded-md hover:bg-gray-900 transition">
          Cargar más Ofertas
        </button>
      </div>
    </section>
  );
};

export default OffersGrid;

