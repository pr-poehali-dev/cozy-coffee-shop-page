import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-coffee-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Логотип и описание */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif text-coffee-light mb-4">
              Уютный Дом
            </h3>
            <p className="text-coffee-cream/80 leading-relaxed mb-6 max-w-md">
              Место, где каждая чашка кофе становится частью вашей истории.
              Приходите за теплом, уютом и незабываемым вкусом.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-coffee-brown rounded-full flex items-center justify-center hover:bg-coffee-light transition-colors duration-300"
              >
                <Icon name="Instagram" className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-coffee-brown rounded-full flex items-center justify-center hover:bg-coffee-light transition-colors duration-300"
              >
                <Icon name="MessageCircle" className="h-5 w-5 text-white" />
              </a>
              <a
                href="tel:+7(495)123-45-67"
                className="w-10 h-10 bg-coffee-brown rounded-full flex items-center justify-center hover:bg-coffee-light transition-colors duration-300"
              >
                <Icon name="Phone" className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-lg font-semibold text-coffee-light mb-4">
              Контакты
            </h4>
            <div className="space-y-3 text-coffee-cream/80">
              <p className="flex items-center">
                <Icon
                  name="MapPin"
                  className="h-4 w-4 mr-2 text-coffee-beige"
                />
                ул. Кофейная, 42
              </p>
              <p className="flex items-center">
                <Icon name="Phone" className="h-4 w-4 mr-2 text-coffee-beige" />
                +7 (495) 123-45-67
              </p>
              <p className="flex items-center">
                <Icon name="Mail" className="h-4 w-4 mr-2 text-coffee-beige" />
                hello@cozy-home.coffee
              </p>
            </div>
          </div>

          {/* Время работы */}
          <div>
            <h4 className="text-lg font-semibold text-coffee-light mb-4">
              Время работы
            </h4>
            <div className="space-y-2 text-coffee-cream/80 text-sm">
              <div>
                <p className="font-medium">Пн-Пт</p>
                <p>7:00 - 23:00</p>
              </div>
              <div>
                <p className="font-medium">Сб-Вс</p>
                <p>8:00 - 24:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-brown/30 pt-8 text-center">
          <p className="text-coffee-cream/60 text-sm">
            © 2024 Уютный Дом. Сделано с ❤️ для любителей настоящего кофе
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
