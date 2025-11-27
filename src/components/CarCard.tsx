import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Fuel, Settings, Star } from "lucide-react";

interface CarCardProps {
  name: string;
  image: string;
  price: number;
  rating: number;
  passengers: number;
  transmission: string;
  fuel: string;
  className?: string;
}

const CarCard = ({
  name,
  image,
  price,
  rating,
  passengers,
  transmission,
  fuel,
  className = "",
}: CarCardProps) => {
  return (
    <div
      className={`group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30 p-6 h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
          Популярно
        </Badge>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title & Rating */}
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-1 text-accent">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">{rating}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{passengers}</span>
          </div>
          <div className="flex items-center gap-1">
            <Settings className="w-4 h-4" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4" />
            <span>{fuel}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <div className="text-2xl font-bold text-primary">
              ₽{price.toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground">за день</div>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6">
            Забронировать
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
