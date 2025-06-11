import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Coffee",
      title: "Авторские зерна",
      description:
        "Отбираем лучшие сорта от проверенных поставщиков. Каждая партия проходит дегустацию и только после этого попадает к вам в чашку.",
    },
    {
      icon: "ChefHat",
      title: "Домашняя выпечка",
      description:
        "Все десерты готовим на собственной кухне по семейным рецептам. Никаких полуфабрикатов — только натуральные ингредиенты и много любви.",
    },
    {
      icon: "Heart",
      title: "Душевная атмосфера",
      description:
        "Мы создали пространство, где можно отдохнуть от городской суеты. Мягкий свет, удобная мебель и негромкая музыка для полного расслабления.",
    },
    {
      icon: "Users",
      title: "Персональный подход",
      description:
        "Наши бариста запоминают предпочтения каждого гостя. Мы знаем, кто любит покрепче, а кому нужен кофе без кофеина, и всегда рады помочь с выбором.",
    },
  ];

  return (
    <section className="py-20 bg-coffee-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-brown mb-6">
            Что делает нас особенными
          </h2>
          <p className="text-lg text-coffee-dark/70 max-w-2xl mx-auto leading-relaxed">
            В каждой детали нашей кофейни есть смысл. Мы не просто подаем кофе —
            мы создаем моменты, которые остаются в памяти.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group animate-scale-in">
              <div className="w-20 h-20 coffee-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Icon
                  name={feature.icon as any}
                  className="h-10 w-10 text-white"
                />
              </div>

              <h3 className="text-xl font-serif text-coffee-brown mb-4 group-hover:text-coffee-light transition-colors">
                {feature.title}
              </h3>

              <p className="text-coffee-dark/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <Icon name="Clock" className="h-5 w-5 text-coffee-brown" />
            <span className="text-coffee-brown font-semibold">
              Работаем ежедневно с 7:00 до 23:00
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
