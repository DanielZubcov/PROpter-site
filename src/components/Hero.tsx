import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Target } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const [creativity, setCreativity] = useState([50]);
  const [includeContext, setIncludeContext] = useState(false);
  const [formalityLevel, setFormalityLevel] = useState(false);
  const [languageRefinement, setLanguageRefinement] = useState(true);

  const handleRefinePrompt = () => {
    // Simulate AI refinement
    const refinedPrompt = `Prompt refinado com IA: ${prompt} - [Criatividade: ${creativity[0]}%, Contexto: ${includeContext ? 'Sim' : 'Não'}, Formalidade: ${formalityLevel ? 'Alta' : 'Baixa'}]`;
    setPrompt(refinedPrompt);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent animate-fade-in">
            <span className="inline-block animate-scale-in">PROpter transforma seus</span>
            <br />
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.3s' }}>Prompts com IA</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A extensão de navegador que usa IA para analisar e refinar seus prompts,
            tornando-os mais eficazes e precisos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-6 hover-scale animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
              Instalar Extensão
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 hover-scale animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              Checar Planos & Preços
            </Button>
          </div>
        </div>

        {/* Interactive Playground */}
        <Card className="max-w-4xl mx-auto p-8 bg-gradient-card border-border/50 shadow-glow-secondary animate-fade-in hover-scale" style={{ animationDelay: '1s' }}>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              Teste antes de instalar
            </h2>
            <p className="text-muted-foreground">
              Teste alguns parâmetros customizaveis e veja como a IA melhora seus prompts
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Seu Prompt Original</label>
                <Textarea
                  placeholder="Digite seu prompt aqui"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[120px] bg-background/50 border-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Parâmetros de Refinamento de teste</h3>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nível de Criatividade: {creativity[0]}%</label>
                  <Slider
                    value={creativity}
                    onValueChange={setCreativity}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="language"
                      checked={languageRefinement}
                      onCheckedChange={(checked) => setLanguageRefinement(checked === true)}
                    />
                    <label htmlFor="language" className="text-sm font-medium">
                      Refinamento de linguagem
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="formality"
                      checked={formalityLevel}
                      onCheckedChange={(checked) => setFormalityLevel(checked === true)}
                    />
                    <label htmlFor="formality" className="text-sm font-medium">
                      Nível de formalidade alto
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="context"
                      checked={includeContext}
                      onCheckedChange={(checked) => setIncludeContext(checked === true)}
                    />
                    <label htmlFor="context" className="text-sm font-medium">
                      Inclusão de contexto específico
                    </label>
                </div>
                {/* Output Section */}
                <div className="space-y-6">
                  <div className="text-center">
                    <Button 
                      onClick={handleRefinePrompt}
                      disabled={!prompt.trim()}
                      className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 mb-4"
                      size="lg"
                    >
                      <Zap className="mr-2 h-5 w-5 animate-pulse" />
                      Refinar com IA
                    </Button>
                  </div>
                </div>
              </div>
            </div>

              <div>
                <label className="block text-sm font-medium mb-2">Prompt Refinado</label>
                <div className="min-h-[120px] p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  {prompt ? (
                    <p className="text-sm text-foreground">{prompt}</p>
                  ) : (
                    <p className="text-muted-foreground text-sm italic">
                      O prompt refinado aparecerá aqui
                    </p>
                  )}
                </div>
              </div>

              <div className="text-center space-y-2">
                <div className="text-sm text-muted-foreground">
                  ✨ Melhoria estimada: +85% de eficácia
                </div>
                <div className="text-xs text-primary">
                  Powered by GPT-5
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;