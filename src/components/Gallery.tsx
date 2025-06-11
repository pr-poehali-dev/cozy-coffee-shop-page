const Gallery = () => {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Бариста готовит кофе",
    },
    {
      url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Уютный интерьер",
    },
    {
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Свежая выпечка",
    },
    {
      url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Латте-арт",
    },
    {
      url: "https://images.unsplash.com/photo-1559496417-e7f25cb247cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Гости за столиком",
    },
    {
      url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Кофейные зерна",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-brown mb-6">
            Атмосфера места
          </h2>
          <p className="text-lg text-coffee-dark/70 max-w-2xl mx-auto leading-relaxed">
            Каждый уголок нашей кофейни создан для вашего комфорта. Почувствуйте
            тепло и уют еще до визита.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in group ${
                index === 0 || index === 4 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                  index === 0 || index === 4 ? "h-64 md:h-96" : "h-32 md:h-48"
                }`}
              />
              <div className="absolute inset-0 bg-coffee-brown/0 group-hover:bg-coffee-brown/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-coffee-dark/60 italic">
            Следите за нашими новостями в
            <a
              href="#"
              className="text-coffee-brown hover:text-coffee-light ml-1 font-semibold"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
