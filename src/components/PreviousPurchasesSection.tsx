import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PreviousPurchasesSection = () => {
  const stats = [
    { label: "Total gasto", value: "R$ 10.291,00" },
    { label: "Total de pedidos", value: "20" },
    { label: "Primeira compra", value: "17/01/25" }
  ];

  const purchases = [
    {
      id: "#1010",
      product: "Galaxy S24 Ultra",
      price: "R$ 1.200,00",
      date: "17 Abr",
      status: "Entregue",
      image: "/placeholder.svg"
    },
    {
      id: "#1010",
      product: "Galaxy S24 Ultra",
      price: "R$ 1.200,00",
      date: "17 Abr",
      status: "Entregue",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="border-b border-border p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Compras anteriores</h2>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Pesquisar..." 
            className="pl-9 bg-muted/50 border-0"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="p-4 border-b border-border">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-base font-semibold text-[hsl(var(--platinum))]">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Purchase List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-sm font-medium text-foreground mb-3">Abril 2025</h3>
          <div className="space-y-3">
            {purchases.map((purchase, index) => (
              <Card key={index} className="p-3 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="relative w-16 h-16 bg-muted rounded-lg flex-shrink-0 overflow-hidden">
                    <img 
                      src={purchase.image} 
                      alt={purchase.product}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">Pedido {purchase.id}</p>
                    <p className="text-sm font-medium text-foreground mb-1">{purchase.product}</p>
                    <p className="text-sm font-semibold text-foreground">{purchase.price}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <p className="text-xs text-muted-foreground">{purchase.date}</p>
                    <p className="text-xs text-muted-foreground">{purchase.status}</p>
                    <ChevronRight className="h-4 w-4 text-muted-foreground mt-1" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
