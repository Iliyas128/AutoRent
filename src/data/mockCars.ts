export interface Car {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  rating: number;
  passengers: number;
  transmission: string;
  fuel: string;
  year: number;
  deposit: number;
  mileage: string;
  consumption: string;
  carClass: string;
  description: string;
  features: string[];
  images: string[];
}

import carLuxury from "@/assets/car-luxury.jpg";
import carSuv from "@/assets/car-suv.jpg";
import carEconomy from "@/assets/car-economy.jpg";

export const mockCars: Car[] = [
  {
    id: "1",
    name: "Mercedes-Benz E-Class",
    brand: "Mercedes-Benz",
    image: carLuxury,
    price: 8500,
    rating: 4.9,
    passengers: 5,
    transmission: "Автомат",
    fuel: "Бензин",
    year: 2023,
    deposit: 25000,
    mileage: "Без ограничений",
    consumption: "8.5 л/100км",
    carClass: "Премиум",
    description: "Роскошный седан бизнес-класса с премиальным комфортом и современными технологиями безопасности.",
    features: ["Кожаный салон", "Панорамная крыша", "Адаптивный круиз-контроль", "Система помощи при парковке", "Мультимедиа система"],
    images: [carLuxury, carLuxury, carLuxury]
  },
  {
    id: "2",
    name: "BMW X5",
    brand: "BMW",
    image: carSuv,
    price: 9500,
    rating: 4.8,
    passengers: 7,
    transmission: "Автомат",
    fuel: "Дизель",
    year: 2023,
    deposit: 30000,
    mileage: "Без ограничений",
    consumption: "7.8 л/100км",
    carClass: "Премиум SUV",
    description: "Просторный кроссовер премиум-класса, идеально подходящий для семейных поездок и путешествий.",
    features: ["7 мест", "Полный привод", "Панорамная крыша", "Камера 360°", "Подогрев всех сидений"],
    images: [carSuv, carSuv, carSuv]
  },
  {
    id: "3",
    name: "Toyota Corolla",
    brand: "Toyota",
    image: carEconomy,
    price: 3500,
    rating: 4.7,
    passengers: 5,
    transmission: "Автомат",
    fuel: "Гибрид",
    year: 2022,
    deposit: 15000,
    mileage: "300 км/день",
    consumption: "4.5 л/100км",
    carClass: "Эконом",
    description: "Экономичный и надежный автомобиль для городских поездок с минимальным расходом топлива.",
    features: ["Гибридный двигатель", "Экономичный расход", "Apple CarPlay", "Камера заднего вида", "Климат-контроль"],
    images: [carEconomy, carEconomy, carEconomy]
  },
  {
    id: "4",
    name: "Audi A6",
    brand: "Audi",
    image: carLuxury,
    price: 7800,
    rating: 4.8,
    passengers: 5,
    transmission: "Автомат",
    fuel: "Бензин",
    year: 2023,
    deposit: 23000,
    mileage: "Без ограничений",
    consumption: "7.9 л/100км",
    carClass: "Премиум",
    description: "Элегантный седан с передовыми технологиями и спортивным характером.",
    features: ["Quattro привод", "Виртуальная панель", "Массаж сидений", "Bang & Olufsen аудио", "Матричные LED фары"],
    images: [carLuxury, carLuxury, carLuxury]
  },
  {
    id: "5",
    name: "Volkswagen Polo",
    brand: "Volkswagen",
    image: carEconomy,
    price: 2800,
    rating: 4.6,
    passengers: 5,
    transmission: "Механика",
    fuel: "Бензин",
    year: 2021,
    deposit: 12000,
    mileage: "250 км/день",
    consumption: "5.8 л/100км",
    carClass: "Эконом",
    description: "Компактный и маневренный автомобиль, идеальный для города.",
    features: ["Компактный размер", "Экономичный", "Bluetooth", "Кондиционер", "ABS, ESP"],
    images: [carEconomy, carEconomy, carEconomy]
  },
  {
    id: "6",
    name: "Hyundai Tucson",
    brand: "Hyundai",
    image: carSuv,
    price: 5500,
    rating: 4.7,
    passengers: 5,
    transmission: "Автомат",
    fuel: "Бензин",
    year: 2023,
    deposit: 18000,
    mileage: "Без ограничений",
    consumption: "7.2 л/100км",
    carClass: "Комфорт SUV",
    description: "Современный кроссовер с просторным салоном и высоким уровнем комфорта.",
    features: ["Просторный багажник", "Подогрев руля", "Беспроводная зарядка", "Датчики парковки", "Круиз-контроль"],
    images: [carSuv, carSuv, carSuv]
  },
];
