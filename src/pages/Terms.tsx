import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, CheckCircle2, AlertCircle } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="bg-gradient-hero py-12 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
              Условия аренды
            </h1>
          </div>
          <p className="text-lg opacity-90">Ознакомьтесь с правилами и условиями аренды автомобилей</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* General Terms */}
          <section className="bg-card rounded-2xl p-8 shadow-card animate-fade-in-up">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              Общие условия
            </h2>
            <div className="space-y-4 text-foreground">
              <div className="flex gap-3">
                <span className="font-semibold text-primary">1.</span>
                <p>
                  Для аренды автомобиля необходимо предоставить действующие водительские права со стажем не менее 2 лет.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-primary">2.</span>
                <p>
                  Минимальный возраст арендатора — 21 год. Для автомобилей премиум-класса — 25 лет.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-primary">3.</span>
                <p>
                  Необходим залог, который возвращается при возврате автомобиля без повреждений.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-primary">4.</span>
                <p>
                  Минимальный срок аренды — 1 день (24 часа). При досрочном возврате деньги не возвращаются.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-primary">5.</span>
                <p>
                  Автомобиль предоставляется с полным баком топлива и должен быть возвращен с полным баком.
                </p>
              </div>
            </div>
          </section>

          {/* Documents */}
          <section className="bg-card rounded-2xl p-8 shadow-card animate-fade-in-up">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              Необходимые документы
            </h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Паспорт гражданина РФ или загранпаспорт (для иностранцев)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Водительские права (российские или международные)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Банковская карта для блокировки залога</span>
              </li>
            </ul>
          </section>

          {/* Insurance */}
          <section className="bg-card rounded-2xl p-8 shadow-card animate-fade-in-up">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              Страхование
            </h2>
            <div className="space-y-4 text-foreground">
              <p>
                <strong>В стоимость аренды включено:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>ОСАГО (обязательное страхование гражданской ответственности)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>КАСКО с франшизой</span>
                </li>
              </ul>
              <p className="mt-4">
                <strong>Дополнительно можно приобрести:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Полное КАСКО без франшизы (+ ₽500/день)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Страхование от угона (+ ₽300/день)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Payment */}
          <section className="bg-card rounded-2xl p-8 shadow-card animate-fade-in-up">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              Условия оплаты
            </h2>
            <div className="space-y-4 text-foreground">
              <div className="bg-primary/10 rounded-xl p-4">
                <p className="font-semibold mb-2">Способы оплаты:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Банковская карта (Visa, MasterCard, МИР)</li>
                  <li>• Наличные (только в офисе)</li>
                  <li>• Безналичный перевод для юридических лиц</li>
                </ul>
              </div>
              <p>
                Стоимость аренды оплачивается полностью при получении автомобиля. Залог блокируется на карте и возвращается после возврата автомобиля (в течение 3-5 рабочих дней).
              </p>
            </div>
          </section>

          {/* Penalties */}
          <section className="bg-card rounded-2xl p-8 shadow-card animate-fade-in-up">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-destructive" />
              Штрафы и санкции
            </h2>
            <div className="space-y-4 text-foreground">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="font-semibold text-destructive">•</span>
                  <p>Опоздание с возвратом более 1 часа — штраф 20% от суточной стоимости</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-destructive">•</span>
                  <p>Возврат автомобиля с пустым баком — штраф ₽3,000 + стоимость топлива</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-destructive">•</span>
                  <p>Курение в автомобиле — штраф ₽5,000 + химчистка</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-destructive">•</span>
                  <p>Загрязнение салона — от ₽2,000 до ₽10,000 (в зависимости от степени)</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-destructive">•</span>
                  <p>Передача автомобиля третьим лицам — расторжение договора без возврата средств</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-destructive">•</span>
                  <p>ДТП по вине арендатора — оплата франшизы по страховке</p>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Services */}
          <section className="bg-card rounded-2xl p-8 shadow-card animate-fade-in-up">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              Дополнительные услуги
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-xl p-4">
                <p className="font-semibold text-foreground mb-1">Детское кресло</p>
                <p className="text-muted-foreground">₽300/день</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <p className="font-semibold text-foreground mb-1">GPS-навигатор</p>
                <p className="text-muted-foreground">₽200/день</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <p className="font-semibold text-foreground mb-1">Дополнительный водитель</p>
                <p className="text-muted-foreground">₽500/день</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <p className="font-semibold text-foreground mb-1">Доставка/возврат авто</p>
                <p className="text-muted-foreground">от ₽1,500</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-primary/10 rounded-2xl p-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-foreground mb-4">Остались вопросы?</h2>
            <p className="text-foreground mb-4">
              Свяжитесь с нами для получения дополнительной информации:
            </p>
            <div className="space-y-2 text-foreground">
              <p><strong>Телефон:</strong> +7 (999) 123-45-67 (круглосуточно)</p>
              <p><strong>Email:</strong> info@autorent.ru</p>
              <p><strong>Адрес:</strong> Москва, ул. Примерная, д. 1</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
