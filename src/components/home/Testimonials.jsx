import { Star } from 'lucide-react';
import data from '../../data/data.json';
import { TitleSection } from './TitleSection';

const Testimonials = () => {
  const { title, testimonials } = data.home.testimonials_section;

  return (
    <section className="container mx-auto border-b-2 border-custom-black-4 min-h-96 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <TitleSection
          title={title}
        />

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-custom-black-2 p-8 border border-custom-black-4 hover:border-custom-red-3 transition-colors"
            >
              {/* Estrellas */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-custom-red-1 text-custom-red-1"
                  />
                ))}
              </div>

              {/* Reseña */}
              <p className="text-custom-white-3 italic mb-6 leading-relaxed">
                "{testimonial.review}"
              </p>

              {/* Cliente */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-custom-black-3 rounded-full"></div>
                <div>
                  <p className="text-custom-white-1 font-semibold">
                    {testimonial.client}
                  </p>
                  <p className="text-custom-white-4 text-sm">
                    {testimonial.clientType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;