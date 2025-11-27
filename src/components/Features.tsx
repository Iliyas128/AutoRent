import { Shield, Clock, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Полная страховка",
    description: "Все автомобили застрахованы и проверены",
  },
  {
    icon: Clock,
    title: "24/7 Доступность",
    description: "Бронируйте и забирайте в любое время",
  },
  {
    icon: CreditCard,
    title: "Гибкая оплата",
    description: "Различные способы оплаты для вашего удобства",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Всегда готовы помочь вам в пути",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мы предлагаем лучший сервис аренды автомобилей с полной поддержкой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
