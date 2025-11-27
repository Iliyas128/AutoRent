import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarCard from "@/components/CarCard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { mockCars } from "@/data/mockCars";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const popularCars = mockCars.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Cars Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12 animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Популярные автомобили
              </h2>
              <p className="text-muted-foreground text-lg">
                Выберите из нашей коллекции премиальных автомобилей
              </p>
            </div>
            <Link to="/catalog" className="hidden md:block">
              <Button variant="outline" className="gap-2">
                Все автомобили
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {popularCars.map((car) => (
              <Link key={car.id} to={`/car/${car.id}`}>
                <CarCard {...car} className="animate-fade-in-up h-full" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/catalog">
              <Button className="gap-2">
                Посмотреть все автомобили
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Features />

      {/* Terms Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Условия аренды
              </h2>
              <p className="text-muted-foreground text-lg">
                Простые и понятные правила для вашего удобства
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all animate-fade-in-up">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">21+</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Возраст и стаж</h3>
                    <p className="text-muted-foreground text-sm">
                      Минимальный возраст — 21 год, стаж вождения от 2 лет
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all animate-fade-in-up">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">24ч</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Минимальный срок</h3>
                    <p className="text-muted-foreground text-sm">
                      Аренда от 1 дня (24 часа) с возможностью продления
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all animate-fade-in-up">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">₽</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Залог</h3>
                    <p className="text-muted-foreground text-sm">
                      Возвращается полностью при возврате авто без повреждений
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all animate-fade-in-up">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Страховка</h3>
                    <p className="text-muted-foreground text-sm">
                      ОСАГО и КАСКО включены в стоимость аренды
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/terms">
                <Button variant="outline" size="lg" className="gap-2">
                  Полные условия аренды
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
