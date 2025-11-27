import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockCars } from "@/data/mockCars";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { format, differenceInDays } from "date-fns";
import { ru } from "date-fns/locale";
import { 
  CalendarIcon, 
  Users, 
  Fuel, 
  Settings, 
  Star, 
  Clock, 
  MapPin,
  CheckCircle2,
  ArrowLeft
} from "lucide-react";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = mockCars.find(c => c.id === id);
  
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Автомобиль не найден</h1>
          <Link to="/catalog">
            <Button>Вернуться к каталогу</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const days = pickupDate && returnDate ? differenceInDays(returnDate, pickupDate) : 0;
  const totalPrice = days > 0 ? car.price * days : 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden bg-gradient-card shadow-card animate-scale-in">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-[400px] object-contain"
              />
            </div>

            {/* Title & Rating */}
            <div className="flex items-start justify-between">
              <div>
                <Badge className="mb-2 bg-accent text-accent-foreground">{car.carClass}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">{car.name}</h1>
                <p className="text-muted-foreground mt-1">{car.year} год</p>
              </div>
              <div className="flex items-center gap-1 text-accent">
                <Star className="w-6 h-6 fill-current" />
                <span className="text-2xl font-bold">{car.rating}</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card rounded-xl p-4 text-center">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Пассажиров</p>
                <p className="font-bold text-foreground">{car.passengers}</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center">
                <Settings className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Коробка</p>
                <p className="font-bold text-foreground">{car.transmission}</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center">
                <Fuel className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Топливо</p>
                <p className="font-bold text-foreground">{car.fuel}</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Пробег</p>
                <p className="font-bold text-foreground">{car.mileage}</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-4">Описание</h2>
              <p className="text-muted-foreground leading-relaxed">{car.description}</p>
            </div>

            {/* Features */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-4">Особенности</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-4">Дополнительно</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Залог</span>
                  <span className="font-semibold text-foreground">₽{car.deposit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Расход топлива</span>
                  <span className="font-semibold text-foreground">{car.consumption}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-card-hover sticky top-24 animate-slide-in-right">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-primary">₽{car.price.toLocaleString()}</span>
                  <span className="text-muted-foreground">/ день</span>
                </div>
              </div>

              {/* Date Selection */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-2">
                    <CalendarIcon className="w-4 h-4 text-primary" />
                    Дата получения
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal rounded-xl h-12",
                          !pickupDate && "text-muted-foreground"
                        )}
                      >
                        {pickupDate ? format(pickupDate, "PPP", { locale: ru }) : "Выберите дату"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={pickupDate}
                        onSelect={setPickupDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-2">
                    <CalendarIcon className="w-4 h-4 text-primary" />
                    Дата возврата
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal rounded-xl h-12",
                          !returnDate && "text-muted-foreground"
                        )}
                      >
                        {returnDate ? format(returnDate, "PPP", { locale: ru }) : "Выберите дату"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        initialFocus
                        disabled={(date) => date < new Date() || (pickupDate ? date <= pickupDate : false)}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Price Calculation */}
              {days > 0 && (
                <div className="bg-muted/50 rounded-xl p-4 mb-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">₽{car.price.toLocaleString()} × {days} дней</span>
                    <span className="font-semibold text-foreground">₽{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between">
                    <span className="font-semibold text-foreground">Итого</span>
                    <span className="text-xl font-bold text-primary">₽{totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              )}

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12 text-lg font-semibold"
                disabled={!pickupDate || !returnDate}
                onClick={() => navigate('/booking', { state: { car, pickupDate, returnDate, days, totalPrice } })}
              >
                Забронировать
              </Button>

              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarDetails;
