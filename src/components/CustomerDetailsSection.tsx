import { Copy, CreditCard, User, Receipt, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function CustomerDetailsSection() {
  return (
    <div className="flex flex-col h-full bg-background overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* Platinum Insight Card */}
        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-[hsl(var(--platinum))] to-orange-600 text-white p-6">
          <div className="flex items-start justify-between mb-3">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
              Platinum
            </Badge>
            <span className="text-xs opacity-90">Insight baseado na conversa</span>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            <span className="font-semibold">Mariana</span> solicita reembolso por causa do
            produto adquirido defeituoso. Abra um pedido de reembolso
          </p>
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
          >
            <Receipt className="h-4 w-4 mr-2" />
            Abrir reembolso
          </Button>
        </Card>

        {/* Customer Information */}
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Nome de preferência / Tratamento</p>
                <p className="text-sm font-medium text-foreground">Marcos</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-border">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Tipo de cliente</p>
                <Badge className="mt-1 bg-[hsl(var(--platinum-light))] text-[hsl(var(--platinum))] border-[hsl(var(--platinum))]">
                  Platinum
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-border">
            <div className="flex items-center gap-3">
              <Receipt className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">CPF</p>
                <p className="text-sm font-medium text-foreground">Marcos Antonio Torres</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <div className="py-3 border-b border-border">
            <div className="flex items-start gap-3 mb-2">
              <CreditCard className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1">Inadimplência</p>
                <p className="text-sm text-foreground">
                  Nenhuma fatura em atraso, 2 Faturas em aberto
                </p>
              </div>
            </div>
            <Button variant="link" className="text-primary p-0 h-auto text-sm ml-8">
              <Receipt className="h-3 w-3 mr-1" />
              Ver 2 faturas
            </Button>
          </div>
        </div>

        {/* Open Tickets */}
        <Card className="p-4 bg-card border-border">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-medium text-foreground">Tickets em aberto</h3>
              <Badge variant="secondary" className="ml-1">
                2
              </Badge>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="h-2 w-2 rounded-full bg-[hsl(var(--platinum))] mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground flex-1">
                Há 2 anos não troca de Smartphone, que tal ofertar algum?
              </p>
            </div>
            <Button variant="link" className="text-primary p-0 h-auto text-sm w-full justify-start">
              Mostrar todos os tickets
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </Card>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <Button variant="ghost" size="sm" className="text-sm">
            Histórico de atendimento
          </Button>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
