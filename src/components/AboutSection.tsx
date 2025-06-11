const AboutSection = () => {
  return (
    <section className="py-20 warm-texture">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif text-coffee-brown mb-8 leading-tight">
              Наша история
            </h2>

            <div className="space-y-6 text-lg text-coffee-dark/80 leading-relaxed">
              <p>
                В самом сердце города, среди шумных улиц и спешащих людей, мы
                создали место, где время замедляется, а душа находит покой.
              </p>

              <p>
                Каждое зерно кофе мы выбираем с особой тщательностью, каждый
                рецепт создаем с любовью. Здесь нет случайных деталей — от
                мягкого света до удобных кресел, всё продумано для вашего
                комфорта.
              </p>

              <p>
                Мы верим, что кофе — это не просто напиток, это ритуал, момент
                единения с собой и близкими. Приходите к нам за чашкой
                настоящего тепла.
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-serif text-coffee-brown font-bold">
                  5+
                </div>
                <div className="text-sm text-coffee-dark/60 uppercase tracking-wide">
                  лет с вами
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-coffee-brown font-bold">
                  15+
                </div>
                <div className="text-sm text-coffee-dark/60 uppercase tracking-wide">
                  сортов кофе
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-coffee-brown font-bold">
                  1000+
                </div>
                <div className="text-sm text-coffee-dark/60 uppercase tracking-wide">
                  довольных гостей
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559496417-e7f25cb247cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Интерьер кофейни"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 coffee-gradient rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">☕</span>
                </div>
                <div>
                  <div className="font-serif text-coffee-brown font-semibold">
                    Авторские рецепты
                  </div>
                  <div className="text-sm text-coffee-dark/60">
                    Создано с любовью
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
