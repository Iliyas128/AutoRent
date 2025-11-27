import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">AutoRent</h3>
            <p className="text-muted-foreground">
              Лучший сервис аренды автомобилей для вашего комфортного путешествия
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Компания</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Наши автомобили
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Блог
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Условия аренды
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span>Москва, ул. Примерная, д. 1</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>info@autorent.ru</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AutoRent. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
