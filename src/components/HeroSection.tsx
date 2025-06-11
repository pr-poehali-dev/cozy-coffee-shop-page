import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.3), rgba(139, 69, 19, 0.5)), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-white mb-6 leading-tight">
            Кофейня
            <span className="block font-normal text-coffee-beige">
              «Уютный Дом»
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Где каждая чашка пахнет домом, а каждый глоток дарит тепло
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="coffee-gradient text-white font-semibold px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Icon name="Menu" className="mr-2 h-5 w-5" />
              Посмотреть меню
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-full hover:bg-white hover:text-coffee-brown transition-all duration-300"
            >
              <Icon name="Calendar" className="mr-2 h-5 w-5" />
              Забронировать столик
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
