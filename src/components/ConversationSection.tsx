import { MessageSquare, MoreHorizontal, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  type: "customer" | "agent";
  text: string;
  avatar?: string;
}

const messages: Message[] = [
  {
    id: "1",
    type: "customer",
    text: "O fone de ouvido que comprei veio com defeito. Um dos lados não funciona. Quero devolver.",
  },
  {
    id: "2",
    type: "agent",
    text: "Puxa, Marianna, lamento sinceramente por esse problema com o seu fone de ouvido. Com certeza vamos resolver isso para você. Você prefere a troca por um produto novo e idêntico ou o reembolso total do valor pago?",
  },
  {
    id: "3",
    type: "customer",
    text: "Prefiro o reembolso. Perdi a confiança no modelo.",
  },
  {
    id: "4",
    type: "agent",
    text: "Compreendido. Processaremos o reembolso total para você. Para isso, preciso que você nos envie o produto de volta para análise. Já gerei um código de postagem reversa gratuito dos Correios para você.",
  },
];

export function ConversationSection() {
  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-foreground">Marinana Santana</h2>
          <span className="text-sm text-muted-foreground">00:27:59</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            Maria Santana
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs text-destructive-foreground">
              3
            </span>
          </Badge>
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Conversation Summary */}
      <div className="px-6 py-4 bg-muted/50 border-b border-border">
        <div className="flex items-start gap-3">
          <Sparkles className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-medium text-foreground mb-1">Resumo da conversa</h3>
            <p className="text-sm text-muted-foreground">
              O cliente está precisando de suporte para fazer a operação de reembolso...
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
              MS
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground">Mariana Santana</span>
        </div>

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.type === "agent" ? "justify-end" : "justify-start"
            }`}
          >
            {message.type === "customer" && (
              <Avatar className="h-10 w-10 flex-shrink-0">
                <AvatarFallback className="bg-muted">MS</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                message.type === "customer"
                  ? "bg-card text-card-foreground border border-border"
                  : "bg-[hsl(var(--agent-message))] text-foreground"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
            {message.type === "agent" && (
              <Avatar className="h-10 w-10 flex-shrink-0">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  AG
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="px-6 py-4 border-t border-border bg-card">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="flex-shrink-0">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Input
            placeholder="Enviar mensagem"
            className="flex-1 bg-background"
          />
          <Button size="icon" className="flex-shrink-0">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="flex items-center justify-center gap-4 px-6 py-3 border-t border-border bg-muted/30">
        <Button variant="ghost" size="sm" className="gap-2">
          <MessageSquare className="h-4 w-4" />
          Chat
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <Sparkles className="h-4 w-4" />
          Visão cliente
        </Button>
      </div>
    </div>
  );
}
