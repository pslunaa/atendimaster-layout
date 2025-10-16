import { useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ConversationSection } from "@/components/ConversationSection";
import { CustomerDetailsSection } from "@/components/CustomerDetailsSection";
import { PreviousPurchasesSection } from "@/components/PreviousPurchasesSection";
import { FloatingActionButtons } from "@/components/FloatingActionButtons";

const Index = () => {
  const [activeSections, setActiveSections] = useState({
    conversation: true,
    customerDetails: true,
    previousPurchases: false
  });

  const handleToggleSection = (section: 'conversation' | 'customerDetails' | 'previousPurchases') => {
    setActiveSections(prev => {
      const newState = { ...prev, [section]: !prev[section] };
      
      // Garantir que pelo menos uma seção esteja ativa
      const activeSectionCount = Object.values(newState).filter(Boolean).length;
      if (activeSectionCount === 0) {
        return prev;
      }
      
      return newState;
    });
  };

  const visibleSections = [
    activeSections.conversation && 'conversation',
    activeSections.customerDetails && 'customerDetails',
    activeSections.previousPurchases && 'previousPurchases'
  ].filter(Boolean);

  const sectionCount = visibleSections.length;
  const defaultSize = 100 / sectionCount;

  return (
    <div className="h-screen w-full overflow-hidden bg-background relative">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        {activeSections.conversation && (
          <>
            <ResizablePanel defaultSize={defaultSize} minSize={20} maxSize={70}>
              <ConversationSection />
            </ResizablePanel>
            
            {(activeSections.customerDetails || activeSections.previousPurchases) && (
              <ResizableHandle className="w-2 bg-[hsl(var(--divider))] hover:bg-[hsl(var(--divider-hover))] transition-colors relative group cursor-col-resize">
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="flex flex-col gap-1.5 p-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/70 group-hover:bg-muted-foreground transition-colors" />
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/70 group-hover:bg-muted-foreground transition-colors" />
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/70 group-hover:bg-muted-foreground transition-colors" />
                  </div>
                </div>
              </ResizableHandle>
            )}
          </>
        )}
        
        {activeSections.customerDetails && (
          <>
            <ResizablePanel defaultSize={defaultSize} minSize={20} maxSize={70}>
              <CustomerDetailsSection />
            </ResizablePanel>
            
            {activeSections.previousPurchases && (
              <ResizableHandle className="w-2 bg-[hsl(var(--divider))] hover:bg-[hsl(var(--divider-hover))] transition-colors relative group cursor-col-resize">
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="flex flex-col gap-1.5 p-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/70 group-hover:bg-muted-foreground transition-colors" />
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/70 group-hover:bg-muted-foreground transition-colors" />
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/70 group-hover:bg-muted-foreground transition-colors" />
                  </div>
                </div>
              </ResizableHandle>
            )}
          </>
        )}
        
        {activeSections.previousPurchases && (
          <ResizablePanel defaultSize={defaultSize} minSize={20} maxSize={70}>
            <PreviousPurchasesSection />
          </ResizablePanel>
        )}
      </ResizablePanelGroup>
      
      <FloatingActionButtons 
        activeSections={activeSections}
        onToggleSection={handleToggleSection}
      />
    </div>
  );
};

export default Index;
