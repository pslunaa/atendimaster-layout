import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ConversationSection } from "@/components/ConversationSection";
import { CustomerDetailsSection } from "@/components/CustomerDetailsSection";

const Index = () => {
  return (
    <div className="h-screen w-full overflow-hidden bg-background">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel defaultSize={50} minSize={30} maxSize={70}>
          <ConversationSection />
        </ResizablePanel>
        
        <ResizableHandle className="w-2 bg-[hsl(var(--divider))] hover:bg-[hsl(var(--divider-hover))] transition-colors relative group">
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
            <div className="flex flex-col gap-1">
              <div className="w-1 h-1 rounded-full bg-muted-foreground/50 group-hover:bg-muted-foreground transition-colors" />
              <div className="w-1 h-1 rounded-full bg-muted-foreground/50 group-hover:bg-muted-foreground transition-colors" />
              <div className="w-1 h-1 rounded-full bg-muted-foreground/50 group-hover:bg-muted-foreground transition-colors" />
            </div>
          </div>
        </ResizableHandle>
        
        <ResizablePanel defaultSize={50} minSize={30} maxSize={70}>
          <CustomerDetailsSection />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Index;
