import { Zap, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const links = {
    product: [
      { label: "Recursos", href: "#features" },
      { label: "Preços", href: "#pricing" },
      { label: "Segurança", href: "#security" },
      { label: "Integrações", href: "#integrations" }
    ],
    community: [
      { label: "Discord", href: "#discord" },
      { label: "GitHub", href: "#github" },
      { label: "Fórum", href: "#forum" },
      { label: "Blog", href: "#blog" }
    ],
    company: [
      { label: "Sobre", href: "#about" },
      { label: "Carreira", href: "#careers" },
      { label: "Imprensa", href: "#press" },
      { label: "Contato", href: "#contact" }
    ],
    legal: [
      { label: "Privacidade", href: "#privacy" },
      { label: "Termos", href: "#terms" },
      { label: "Cookies", href: "#cookies" },
      { label: "LGPD", href: "#lgpd" }
    ]
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                PROpter
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              A extensão de navegador que transforma seus prompts com inteligência artificial, 
              tornando-os mais eficazes e precisos.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Produto</h3>
            <ul className="space-y-2">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Comunidade</h3>
            <ul className="space-y-2">
              {links.community.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Empresa</h3>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 PROpter. Todos os direitos reservados.
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Feito com ❤️ no Brasil</span>
            <span>•</span>
            <span>Powered by AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;