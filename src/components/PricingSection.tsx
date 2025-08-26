import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Standard",
      price: "R$ 0",
      period: "para sempre",
      description: "Perfeito para começar e usos ocasionais",
      icon: <Sparkles className="h-6 w-6 animate-pulse" />,
      features: [
        "Contém anúncios",
        "100 refinamentos por mês",
        "Modelos básicos de IA",
        "Suporte por email",
        "Extensão para Chrome, Opera, Microsoft Edge e Firefox"
      ],
      cta: "Começe Gratuitamente",
      popular: false
    },
    {
      name: "Pro",
      price: "R$ 29",
      period: "por mês",
      description: "Para usuários profissionais que querem o máximo de desempenho em seus prompts",
      icon: <Zap className="h-6 w-6 animate-pulse" />,
      features: [
        "Completamente livre de anúncios",
        "1000 refinamentos por mês",
        "Todos os modelos de IA",
        "Histórico ilimitado",
        "Suporte prioritário",
        "Templates personalizados",
        "Análise de performance"
      ],
      cta: "Escolher Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "R$ 99",
      period: "por mês",
      description: "Para equipes e empresas que precisam de controle, segurança e suporte dedicados",
      icon: <Crown className="h-6 w-6 animate-pulse" />,
      features: [
        "Refinamentos ilimitados",
        "IA personalizada para a sua equipe e negócio",
        "Dashboard analítico",
        "Integração via API",
        "Suporte 24/7",
        "Treinamento da equipe",
        "Conformidade LGPD",
        "Deploy on-premise"
      ],
      cta: "Falar com a equipe de vendas",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Preços Justos e Serviços Transparentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para suas necessidades. Sem taxas ocultas, sem fidelidade, cancele quando quiser.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-6 ${
                plan.popular 
                  ? 'bg-gradient-card border-primary shadow-glow-primary scale-105' 
                  : 'bg-gradient-card border-border/50'
              } transition-all duration-300 hover:shadow-glow-secondary`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary">
                  Melhor Escolha
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-lg ${plan.popular ? 'bg-primary/20' : 'bg-muted'}`}>
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="flex items-baseline justify-center gap-1 mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:shadow-glow-primary' 
                      : 'bg-secondary hover:bg-secondary/80'
                  } transition-all duration-300`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            🔒 Pagamento seguro • 💰 Garantia de 30 dias • 🚀 Ativação instantânea
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;