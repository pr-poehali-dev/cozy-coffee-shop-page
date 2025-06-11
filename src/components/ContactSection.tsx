import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-brown mb-6">
            Ждем вас в гости
          </h2>
          <p className="text-lg text-coffee-dark/70 max-w-2xl mx-auto leading-relaxed">
            Приходите к нам за чашкой отличного кофе и теплым общением. Мы
            всегда рады новым и постоянным гостям.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <Card className="border-0 shadow-lg bg-coffee-cream">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 coffee-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-coffee-brown mb-2">
                      Адрес
                    </h3>
                    <p className="text-coffee-dark/80 leading-relaxed">
                      ул. Кофейная, 42
                      <br />
                      Москва, 123456
                      <br />
                      <span className="text-sm text-coffee-dark/60">
                        5 минут пешком от метро "Уютная"
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-coffee-cream">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 coffee-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-coffee-brown mb-2">
                      Время работы
                    </h3>
                    <div className="space-y-1 text-coffee-dark/80">
                      <div className="flex justify-between">
                        <span>Понедельник - Пятница</span>
                        <span>7:00 - 23:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Суббота - Воскресенье</span>
                        <span>8:00 - 24:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-coffee-cream">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 coffee-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-coffee-brown mb-2">
                      Контакты
                    </h3>
                    <div className="space-y-2 text-coffee-dark/80">
                      <div>
                        <a
                          href="tel:+7(495)123-45-67"
                          className="hover:text-coffee-brown transition-colors"
                        >
                          +7 (495) 123-45-67
                        </a>
                      </div>
                      <div>
                        <a
                          href="mailto:hello@cozy-home.coffee"
                          className="hover:text-coffee-brown transition-colors"
                        >
                          hello@cozy-home.coffee
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="coffee-gradient text-white font-semibold px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg flex-1"
              >
                <Icon name="Navigation" className="mr-2 h-5 w-5" />
                Проложить маршрут
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-coffee-brown text-coffee-brown bg-white px-8 py-4 text-lg rounded-full hover:bg-coffee-brown hover:text-white transition-all duration-300 flex-1"
              >
                <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="animate-scale-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px] bg-coffee-light">
              <div className="w-full h-full bg-gradient-to-br from-coffee-light to-coffee-beige flex items-center justify-center">
                <div className="text-center text-white">
                  <Icon name="MapPin" className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-serif mb-2">
                    Интерактивная карта
                  </h3>
                  <p className="text-white/80">
                    Здесь будет отображаться карта с точным расположением
                    кофейни
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
