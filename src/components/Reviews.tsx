import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Михайлова",
      text: "Это не просто кофейня, это место силы! Каждый раз, когда захожу сюда, чувствую себя как дома. Кофе божественный, а атмосфера просто волшебная.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616c1c723be?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Дмитрий Соколов",
      text: "Работаю удаленно и часто прихожу сюда с ноутбуком. Идеальное место для сосредоточенной работы. Wi-Fi отличный, кофе всегда свежий, персонал внимательный.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Елена Петрова",
      text: "Мое любимое место для встреч с подругами. Десерты здесь просто невероятные, а чизкейк – это что-то особенное! Обязательно вернемся еще.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Александр Иванов",
      text: "Случайно зашел по пути на работу и теперь это мой ежедневный ритуал. Бариста помнят мой заказ, всегда встречают с улыбкой. Чувствую себя частью большой семьи.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Мария Смирнова",
      text: "Привела сюда маму на день рождения. Она была в восторге от обстановки и сервиса. Спасибо за то, что делаете особенными даже обычные моменты!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    <section className="py-20 warm-texture">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-brown mb-6">
            Отзывы наших гостей
          </h2>
          <p className="text-lg text-coffee-dark/70 max-w-2xl mx-auto leading-relaxed">
            Ваше мнение для нас самое важное. Читайте, что говорят о нас те, кто
            уже стал частью нашей кофейной семьи.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in bg-white"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="h-5 w-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-coffee-dark/80 leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>

                <div className="flex items-center">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-coffee-brown">
                      {review.name}
                    </div>
                    <div className="text-sm text-coffee-dark/60">
                      Постоянный гость
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {reviews.slice(3).map((review, index) => (
            <Card
              key={index + 3}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in bg-white"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="h-5 w-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-coffee-dark/80 leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>

                <div className="flex items-center">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-coffee-brown">
                      {review.name}
                    </div>
                    <div className="text-sm text-coffee-dark/60">
                      Постоянный гость
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
