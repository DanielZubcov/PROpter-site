import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, BookOpen, Star, Github, Twitter } from "lucide-react";

const CommunitySection = () => {
  const stats = [
    { label: "Membros Ativos", value: "12.5K+", icon: <Users className="h-5 w-5 animate-pulse" /> },
    { label: "Prompts Compartilhados", value: "8.3K+", icon: <MessageCircle className="h-5 w-5 animate-pulse" /> },
    { label: "Templates Públicos", value: "450+", icon: <BookOpen className="h-5 w-5 animate-pulse" /> },
    { label: "Avaliação Média", value: "4.9★", icon: <Star className="h-5 w-5 animate-pulse" /> }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Product Manager",
      avatar: "MS",
      content: "O PROpter revolucionou como nossa equipe cria prompts. A comunidade é incrível!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "UX Designer",  
      avatar: "JS",
      content: "Templates da comunidade me economizam horas. Recomendo a todos!",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Marketing Manager",
      avatar: "AC", 
      content: "Suporte excepcional e recursos que realmente funcionam. Nota 10!",
      rating: 5
    }
  ];

  const communityFeatures = [
    {
      title: "Templates Compartilhados",
      description: "Acesse milhares de templates criados pela comunidade",
      icon: <BookOpen className="h-6 w-6 animate-pulse" />
    },
    {
      title: "Fórum de Discussão", 
      description: "Troque experiências e tire dúvidas com outros usuários",
      icon: <MessageCircle className="h-6 w-6 animate-pulse" />
    },
    {
      title: "Eventos Online",
      description: "Participe de workshops e webinars sobre IA e prompts",
      icon: <Users className="h-6 w-6 animate-pulse" />
    }
  ];

  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Junte-se à Nossa Comunidade
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conecte-se com milhares de profissionais que estão transformando seus prompts com IA
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card border-border/50">
              <div className="flex justify-center mb-2">
                <div className="p-2 bg-primary/20 rounded-lg">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Community Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-glow-secondary transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">O que nossa comunidade diz</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/50">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Conecte-se conosco</h3>
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="lg" className="hover:shadow-glow-secondary transition-all">
              <MessageCircle className="mr-2 h-5 w-5" />
              Discord
            </Button>
            <Button variant="outline" size="lg" className="hover:shadow-glow-secondary transition-all">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="hover:shadow-glow-secondary transition-all">
              <Twitter className="mr-2 h-5 w-5" />
              Twitter
            </Button>
          </div>
          
          <Button className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300" size="lg">
            <Users className="mr-2 h-5 w-5" />
            Entrar na Comunidade
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;