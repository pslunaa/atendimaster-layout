import { Button } from "@/components/ui/button";
import { MessageSquare, Eye, ShoppingBag, History, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingActionButtonsProps {
  activeSections: {
    conversation: boolean;
    customerDetails: boolean;
    previousPurchases: boolean;
  };
  onToggleSection: (section: 'conversation' | 'customerDetails' | 'previousPurchases') => void;
}

export const FloatingActionButtons = ({ activeSections, onToggleSection }: FloatingActionButtonsProps) => {
  const buttons: Array<{
    id: 'conversation' | 'customerDetails' | 'previousPurchases' | 'history';
    icon: any;
    label: string;
    active: boolean;
    disabled?: boolean;
  }> = [
    {
      id: 'conversation',
      icon: MessageSquare,
      label: "Chat",
      active: activeSections.conversation
    },
    {
      id: 'customerDetails',
      icon: Eye,
      label: "Visão cliente",
      active: activeSections.customerDetails
    },
    {
      id: 'previousPurchases',
      icon: ShoppingBag,
      label: "Compras anteriores",
      active: activeSections.previousPurchases
    },
    {
      id: 'history',
      icon: History,
      label: "Histórico de atendimento",
      active: false,
      disabled: true
    }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-card border border-border rounded-full shadow-lg px-3 py-2">
        {buttons.map((button) => (
          <Button
            key={button.id}
            variant="ghost"
            size="sm"
            disabled={button.disabled}
            onClick={() => {
              if (!button.disabled && button.id !== 'history') {
                onToggleSection(button.id as 'conversation' | 'customerDetails' | 'previousPurchases');
              }
            }}
            className={cn(
              "gap-2 rounded-full transition-all",
              button.active 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "hover:bg-muted",
              button.disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            <button.icon className="h-4 w-4" />
            <span className="text-sm">{button.label}</span>
          </Button>
        ))}
        
        <div className="w-px h-6 bg-border mx-1" />
        
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-8 w-8 bg-[hsl(var(--platinum))] text-primary-foreground hover:bg-[hsl(var(--platinum))]/90"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
