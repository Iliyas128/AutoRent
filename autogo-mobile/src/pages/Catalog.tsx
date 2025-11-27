import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { mockCars } from "@/data/mockCars";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal } from "lucide-react";

const Catalog = () => {
  const [priceRange, setPriceRange] = useState([2000, 10000]);
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedTransmission, setSelectedTransmission] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popularity");

  const brands = ["all", ...Array.from(new Set(mockCars.map(car => car.brand)))];

  const filteredCars = mockCars
    .filter(car => {
      if (selectedBrand !== "all" && car.brand !== selectedBrand) return false;
      if (selectedTransmission !== "all" && car.transmission !== selectedTransmission) return false;
      if (car.price < priceRange[0] || car.price > priceRange[1]) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-hero py-12 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Каталог автомобилей</h1>
          <p className="text-lg opacity-90 animate-fade-in">Найдено {filteredCars.length} автомобилей</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-card-foreground">Фильтры</h2>
              </div>

              {/* Brand Filter */}
              <div className="space-y-3 mb-6">
                <label className="text-sm font-medium text-foreground">Бренд</label>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все бренды" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все бренды</SelectItem>
                    {brands.filter(b => b !== "all").map(brand => (
                      <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="space-y-3 mb-6">
                <label className="text-sm font-medium text-foreground">
                  Цена: ₽{priceRange[0].toLocaleString()} - ₽{priceRange[1].toLocaleString()}
                </label>
                <Slider
                  min={1000}
                  max={15000}
                  step={500}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="py-4"
                />
              </div>

              {/* Transmission Filter */}
              <div className="space-y-3 mb-6">
                <label className="text-sm font-medium text-foreground">Коробка передач</label>
                <Select value={selectedTransmission} onValueChange={setSelectedTransmission}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все типы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все типы</SelectItem>
                    <SelectItem value="Автомат">Автомат</SelectItem>
                    <SelectItem value="Механика">Механика</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sort */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Сортировка</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Популярность</SelectItem>
                    <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                    <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                    <SelectItem value="rating">Рейтинг</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="outline"
                className="w-full mt-6"
                onClick={() => {
                  setSelectedBrand("all");
                  setSelectedTransmission("all");
                  setPriceRange([2000, 10000]);
                  setSortBy("popularity");
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          </aside>

          {/* Cars Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCars.map((car) => (
                <Link key={car.id} to={`/car/${car.id}`}>
                  <CarCard {...car} className="h-full hover:scale-[1.02] transition-transform" />
                </Link>
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Автомобили не найдены. Попробуйте изменить фильтры.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
