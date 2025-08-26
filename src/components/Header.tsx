import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 animate-fade-in">
          <Zap className="h-8 w-8 text-primary animate-pulse" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover-scale">
            PROpter
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Preços
          </a>
          <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
            Comunidade
          </a>
          <a href="#enterprise" className="text-muted-foreground hover:text-foreground transition-colors">
            Para Empresas
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Entrar
          </Button>
          <Button className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
            Começar Grátis
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;