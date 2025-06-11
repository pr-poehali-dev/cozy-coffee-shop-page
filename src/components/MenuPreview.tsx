import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MenuPreview = () => {
  const menuItems = [
    {
      name: "Капучино «Домашний»",
      description: "Нежная молочная пенка с нотками ванили и корицы",
      price: "280₽",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Авторский раф",
      description: "Сливочный кофе с лавандовым сиропом и карамелью",
      price: "320₽",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Флэт уайт",
      description: "Крепкий эспрессо с бархатистым молоком",
      price: "260₽",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Тыквенный латте",
      description: "Сезонный напиток с тыквенными специями",
      price: "340₽",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Чизкейк Нью-Йорк",
      description: "Классический десерт с ягодным соусом",
      price: "380₽",
      image:
        "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Круассан с миндалем",
      description: "Французская выпечка с миндальным кремом",
      price: "220₽",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="py-20 bg-coffee-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-brown mb-6">
            Фирменные напитки
          </h2>
          <p className="text-lg text-coffee-dark/70 max-w-2xl mx-auto leading-relaxed">
            Каждый рецепт создан нашими бариста специально для вас. Попробуйте
            то, что делает нас особенными.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-coffee-brown text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.price}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-coffee-brown mb-2 group-hover:text-coffee-light transition-colors">
                  {item.name}
                </h3>
                <p className="text-coffee-dark/70 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="coffee-gradient text-white font-semibold px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Icon name="Download" className="mr-2 h-5 w-5" />
            Скачать полное меню
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
