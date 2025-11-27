import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CheckCircle2 } from "lucide-react";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { car, pickupDate, returnDate, days, totalPrice } = location.state || {};

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    document: "",
    pickupLocation: "office-center",
    paymentMethod: "online",
  });

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Данные бронирования отсутствуют</h1>
          <Button onClick={() => navigate("/catalog")}>Вернуться к каталогу</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Простая валидация
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.document) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }

    // Имитация успешного бронирования
    toast.success("Бронирование успешно создано!", {
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="bg-gradient-hero py-12 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Оформление бронирования</h1>
          <p className="text-lg opacity-90">Осталось несколько шагов до получения автомобиля</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h2 className="text-2xl font-bold text-foreground mb-6">Личные данные</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Имя *</Label>
                    <Input
                      id="firstName"
                      placeholder="Иван"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия *</Label>
                    <Input
                      id="lastName"
                      placeholder="Иванов"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="document">Номер паспорта / ID *</Label>
                    <Input
                      id="document"
                      placeholder="1234 567890"
                      value={formData.document}
                      onChange={(e) => setFormData({ ...formData, document: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Pickup Location */}
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h2 className="text-2xl font-bold text-foreground mb-6">Место получения</h2>
                <RadioGroup
                  value={formData.pickupLocation}
                  onValueChange={(value) => setFormData({ ...formData, pickupLocation: value })}
                >
                  <div className="flex items-center space-x-2 p-4 rounded-xl border border-border hover:border-primary transition-colors">
                    <RadioGroupItem value="office-center" id="office-center" />
                    <Label htmlFor="office-center" className="flex-1 cursor-pointer">
                      <p className="font-semibold">Офис в центре</p>
                      <p className="text-sm text-muted-foreground">Москва, ул. Примерная, д. 1</p>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 rounded-xl border border-border hover:border-primary transition-colors">
                    <RadioGroupItem value="airport" id="airport" />
                    <Label htmlFor="airport" className="flex-1 cursor-pointer">
                      <p className="font-semibold">Аэропорт Шереметьево</p>
                      <p className="text-sm text-muted-foreground">Терминал D, зона выдачи багажа</p>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 rounded-xl border border-border hover:border-primary transition-colors">
                    <RadioGroupItem value="delivery" id="delivery" />
                    <Label htmlFor="delivery" className="flex-1 cursor-pointer">
                      <p className="font-semibold">Доставка по адресу</p>
                      <p className="text-sm text-muted-foreground">+ ₽1,500 к стоимости</p>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Payment Method */}
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h2 className="text-2xl font-bold text-foreground mb-6">Способ оплаты</h2>
                <RadioGroup
                  value={formData.paymentMethod}
                  onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                >
                  <div className="flex items-center space-x-2 p-4 rounded-xl border border-border hover:border-primary transition-colors">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online" className="flex-1 cursor-pointer">
                      <p className="font-semibold">Онлайн оплата</p>
                      <p className="text-sm text-muted-foreground">Банковская карта, безопасно</p>
                    </Label>
                    <Badge className="bg-accent text-accent-foreground">Рекомендуем</Badge>
                  </div>
                  <div className="flex items-center space-x-2 p-4 rounded-xl border border-border hover:border-primary transition-colors">
                    <RadioGroupItem value="prepayment" id="prepayment" />
                    <Label htmlFor="prepayment" className="flex-1 cursor-pointer">
                      <p className="font-semibold">Предоплата 30%</p>
                      <p className="text-sm text-muted-foreground">Остальное при получении</p>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 rounded-xl border border-border hover:border-primary transition-colors">
                    <RadioGroupItem value="on-pickup" id="on-pickup" />
                    <Label htmlFor="on-pickup" className="flex-1 cursor-pointer">
                      <p className="font-semibold">При получении</p>
                      <p className="text-sm text-muted-foreground">Наличные или карта</p>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12 text-lg font-semibold px-12"
              >
                Подтвердить бронирование
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-card-hover sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">Детали заказа</h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <img src={car.image} alt={car.name} className="w-24 h-24 object-contain rounded-xl bg-muted" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{car.name}</h3>
                    <Badge className="mt-1">{car.carClass}</Badge>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Получение</span>
                    <span className="font-medium text-foreground">
                      {pickupDate && format(pickupDate, "dd MMM yyyy", { locale: ru })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Возврат</span>
                    <span className="font-medium text-foreground">
                      {returnDate && format(returnDate, "dd MMM yyyy", { locale: ru })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Количество дней</span>
                    <span className="font-medium text-foreground">{days}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Аренда ({days} дней)</span>
                    <span className="font-medium text-foreground">₽{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Залог</span>
                    <span className="font-medium text-foreground">₽{car.deposit.toLocaleString()}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between items-center pt-2">
                  <span className="font-semibold text-foreground">Итого к оплате</span>
                  <span className="text-2xl font-bold text-primary">
                    ₽{(totalPrice + car.deposit).toLocaleString()}
                  </span>
                </div>

                <div className="bg-accent/10 rounded-xl p-4 mt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">
                      Залог возвращается при возврате автомобиля в целости и сохранности
                    </p>
                  </div>
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

export default Booking;
