import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      before: "Faça um texto sobre marketing",
      after: "Crie um artigo abrangente de 800 palavras sobre estratégias de marketing digital para pequenas empresas em 2024, incluindo SEO, redes sociais, e email marketing, com exemplos práticos e métricas de sucesso.",
      improvements: ["Mais específico", "Contexto definido", "Extensão clara", "Exemplos incluídos"]
    },
    {
      before: "Ajude com vendas",
      after: "Desenvolva um script de vendas consultiva para produtos SaaS B2B, focando em identificar dores do cliente, apresentar soluções personalizadas e técnicas de fechamento baseadas em valor, não preço.",
      improvements: ["Método definido", "Público específico", "Abordagem clara", "Foco estratégico"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Antes vs Depois
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como a IA transforma prompts simples em instruções poderosas e eficazes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {comparisons.map((comparison, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50">
              <div className="space-y-6">
                {/* Before */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-destructive" />
                    <Badge variant="destructive">Antes</Badge>
                  </div>
                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <p className="text-sm text-foreground">{comparison.before}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>

                {/* After */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <Badge className="bg-green-500/20 text-green-500">Depois</Badge>
                  </div>
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-sm text-foreground">{comparison.after}</p>
                  </div>
                </div>

                {/* Improvements */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary">Melhorias Aplicadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {comparison.improvements.map((improvement, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {improvement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;