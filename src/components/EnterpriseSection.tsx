import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Shield, Zap, Users, BarChart, Settings, Lock, Headphones } from "lucide-react";

const EnterpriseSection = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 animate-pulse" />,
      title: "Segurança Empresarial",
      description: "Conformidade LGPD, criptografia end-to-end e auditoria completa",
      badge: "Enterprise"
    },
    {
      icon: <Users className="h-6 w-6 animate-pulse" />,
      title: "Gestão de Equipes",
      description: "Controle de acesso, permissões granulares e hierarquia organizacional",
      badge: "Teams"
    },
    {
      icon: <BarChart className="h-6 w-6 animate-pulse" />,
      title: "Analytics Avançado",
      description: "Dashboards personalizados, métricas de ROI e relatórios detalhados",
      badge: "Pro"
    },
    {
      icon: <Settings className="h-6 w-6 animate-pulse" />,
      title: "Integração API",
      description: "RESTful API, webhooks e conectores para sistemas existentes",
      badge: "API"
    }
  ];

  const benefits = [
    "Deploy on-premise ou cloud privada",
    "Treinamento personalizado da IA",
    "SLA garantido de 99.9%",
    "Suporte técnico 24/7",
    "Gerente de conta dedicado",
    "Onboarding completo da equipe"
  ];

  const clients = [
    { name: "TechCorp", size: "500+ funcionários", industry: "Tecnologia" },
    { name: "Marketing Pro", size: "200+ funcionários", industry: "Marketing" },
    { name: "Consultoria Plus", size: "1000+ funcionários", industry: "Consultoria" },
    { name: "StartupX", size: "50+ funcionários", industry: "Startup" }
  ];

  return (
    <section id="enterprise" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary">Enterprise</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            PROpter para Empresas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções escaláveis de IA para equipes e organizações que precisam de controle, 
            segurança e performance superiores.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-glow-secondary transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <Badge variant="secondary" className="mb-2 w-fit mx-auto">
                  {feature.badge}
                </Badge>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Benefits */}
          <Card className="p-8 bg-gradient-card border-border/50">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Recursos Exclusivos</CardTitle>
              </div>
              <CardDescription>
                Ferramentas avançadas pensadas para empresas que levam IA a sério
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Clients */}
          <Card className="p-8 bg-gradient-card border-border/50">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <Building className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Clientes Enterprise</CardTitle>
              </div>
              <CardDescription>
                Empresas que confiam no PROpter para impulsionar sua produtividade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clients.map((client, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                    <div>
                      <div className="font-semibold">{client.name}</div>
                      <div className="text-xs text-muted-foreground">{client.industry}</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {client.size}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-card border-primary/20 shadow-glow-primary">
          <CardHeader>
            <CardTitle className="text-3xl mb-4">
              Pronto para Transformar sua Empresa?
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fale com nossos especialistas e descubra como o PROpter pode revolucionar 
              a produtividade da sua equipe com IA personalizada.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
                <Headphones className="mr-2 h-5 w-5" />
                Agendar Demonstração
              </Button>
              <Button variant="outline" size="lg" className="hover:shadow-glow-secondary transition-all">
                <Zap className="mr-2 h-5 w-5" />
                Teste Enterprise Grátis
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              📞 +55 (11) 9999-9999 • 📧 enterprise@propter.com
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EnterpriseSection;