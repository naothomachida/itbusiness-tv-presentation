import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap, Shield, Cpu, TrendingUp, Globe, Database, AlertTriangle } from 'lucide-react';
import FlickeringGrid from './components/ui/flickering-grid';
import AuroraText from './components/ui/aurora-text';
import Logo from './components/shared/Logo';

const SLIDE_DURATION = 15000; // 15 seconds per slide
const CLIENT_NAME = "ERP FBS LUBRIFICANTES"; // EDIT THIS FOR THE CLIENT

const Slide = ({ children, isActive }) => (
  <AnimatePresence mode="wait">
    {isActive && (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  const slides = [
    // Slide 1: Intro
    (
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <FlickeringGrid 
            squareSize={4}
            gridGap={6}
            color="#4169E1"
            maxOpacity={0.5}
            flickerChance={0.1}
            width={1920}
            height={1080}
          />
        </div>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="z-10 text-center"
        >
          <Logo iconClassName="w-24 h-24 mb-8" textClassName="text-6xl font-bold tracking-widest" />
          <h1 className="mt-12 text-7xl font-bold text-white tracking-tighter">
            <AuroraText>Transformação Digital</AuroraText>
          </h1>
          <p className="mt-6 text-3xl text-primary-blue-light font-light uppercase tracking-[0.5em]">
            De Alto Impacto
          </p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 px-10 py-4 border border-white/10 bg-white/5 rounded-full backdrop-blur-md inline-block"
          >
            <span className="text-zinc-400 text-xl uppercase tracking-widest mr-4 font-light">Proposta Estratégica para:</span>
            <span className="text-white text-2xl font-bold uppercase tracking-widest">{CLIENT_NAME}</span>
          </motion.div>
        </motion.div>
        
        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end border-t border-white/10 pt-8">
          <div className="text-white/40 text-sm font-mono tracking-widest uppercase">
            ESTRATÉGIA • TECNOLOGIA • ESCALA
          </div>
          <div className="text-white/40 text-sm font-mono tracking-widest uppercase">
            IT BUSINESS © 2026
          </div>
        </div>
      </div>
    ),

    // Slide 2: The Scenario / Problem
    (
      <div className="relative w-full h-full flex items-center justify-center bg-zinc-950 p-24">
        <div className="grid grid-cols-2 gap-16 w-full max-w-7xl items-center">
          <div>
            <h2 className="text-5xl font-bold text-white mb-8 border-l-4 border-primary-blue pl-8 italic uppercase tracking-tighter">
              Cenário Atual: <br /><span className="text-primary-blue">Reconstrução Estratégica</span>
            </h2>
            <p className="text-2xl text-zinc-400 font-light leading-relaxed">
              Propomos uma <span className="text-white font-medium">reconstrução total do motor do software</span> (Backend), eliminando dívidas técnicas e gargalos de performance, enquanto <span className="text-primary-blue-light font-medium">preservamos a interface (Front-end)</span> que sua equipe já domina.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: Cpu, label: "Core Business Modernizado", color: "text-primary-blue-light" },
              { icon: Shield, label: "Segurança de Dados Refatorada", color: "text-blue-400" },
              { icon: TrendingUp, label: "Escalabilidade Sem Atrito", color: "text-emerald-400" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 + 0.5 }}
                className="bg-zinc-900 p-8 rounded-2xl border border-white/5 flex items-center gap-6"
              >
                <div className={`p-4 rounded-xl bg-black/40 ${item.color}`}>
                  <item.icon size={40} />
                </div>
                <span className="text-2xl text-white font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),

    // Slide 3: Action Plan
    (
      <div className="relative w-full h-full flex items-center justify-center bg-black">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-blue/30 via-transparent to-transparent" />
        <div className="z-10 text-center max-w-6xl px-12">
          <h2 className="text-6xl font-black text-white mb-16 italic uppercase tracking-tighter">
            Nosso <span className="text-primary-blue">Plano de Ação</span>
          </h2>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              { 
                title: "Mapeamento", 
                desc: "Mapeamento detalhado de todos os processos atuais.", 
                icon: Globe,
                label: "Processo" 
              },
              { 
                title: "Análise", 
                desc: "Análise de aderência técnica e funcional do sistema.", 
                icon: Shield,
                label: "Aderência" 
              },
              { 
                title: "MVP", 
                desc: "Implantação ágil focada no núcleo do negócio.", 
                icon: Zap,
                label: "Implantação" 
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="bg-zinc-900/50 backdrop-blur-xl border border-primary-blue/20 p-12 rounded-3xl h-full flex flex-col items-center"
              >
                <div className="p-6 rounded-2xl bg-primary-blue/10 mb-8">
                  <feature.icon size={64} className="text-primary-blue-light" />
                </div>
                <h3 className="text-primary-blue-light font-bold text-sm uppercase mb-2 tracking-[0.3em]">{feature.label}</h3>
                <h3 className="text-4xl font-bold text-white mb-6 uppercase">{feature.title}</h3>
                <p className="text-2xl text-zinc-400 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),

    // Slide 4: BPMN & Process Engineering
    (
      <div className="relative w-full h-full flex items-center bg-zinc-950 px-24 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-primary-blue opacity-5 transform skew-x-12 translate-x-1/2" />
        <div className="grid grid-cols-12 gap-12 w-full z-10">
          <div className="col-span-7">
            <h2 className="text-6xl font-bold text-white mb-8 italic uppercase tracking-tighter leading-tight">
              Engenharia de <br /><span className="text-primary-blue">Processos (BPMN)</span>
            </h2>
            <div className="bg-red-500/10 border-l-4 border-red-500 p-6 mb-10">
              <p className="text-2xl text-red-200 font-medium italic leading-relaxed">
                "O erro na Nota Fiscal é apenas o sintoma. <br />A doença está na integridade do fluxo de dados no Backend."
              </p>
            </div>
            <ul className="space-y-8">
              {[
                { title: "Blindagem de Regras", desc: "Garantir que o dado da produção chegue 100% íntegro ao Faturamento." },
                { title: "Segurança Fiscal", desc: "Eliminar divergências que geram multas e retrabalho operacional." },
                { title: "Asset da Empresa", desc: "A documentação fabril passa a ser propriedade intelectual da FBS." }
              ].map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6"
                >
                  <div className="mt-2 w-4 h-4 rounded-full bg-primary-blue shrink-0 shadow-[0_0_15px_rgba(65,105,225,0.5)]" />
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-1 uppercase tracking-tight">{point.title}</h4>
                    <p className="text-xl text-zinc-400 font-light">{point.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="col-span-5 flex items-center justify-center">
             <div className="relative w-full aspect-square bg-zinc-900/50 rounded-full border border-white/5 flex items-center justify-center">
                <div className="absolute inset-0 animate-pulse opacity-20 bg-primary-blue rounded-full blur-3xl"></div>
                <div className="z-10 text-center">
                  <Shield size={120} className="text-primary-blue mx-auto mb-6" />
                  <div className="text-3xl font-black text-white uppercase tracking-tighter">Foco em</div>
                  <div className="text-5xl font-black text-primary-blue-light uppercase tracking-tighter text-nowrap">SEGURANÇA</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    ),

    // Slide 5: The Discovery Deliverables (R$ 18k)
    (
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-black p-24">
        <h2 className="text-5xl font-bold text-white mb-16 text-center uppercase tracking-widest italic">
          O Investimento no <span className="text-primary-blue">Alicerce</span>
        </h2>
        
        <div className="grid grid-cols-3 gap-8 w-full max-w-7xl">
          {[
            { 
              t: "Blueprint de Processo", 
              d: "Desenho ponta a ponta: Entrada -> Produção -> Pesagem -> Faturamento.", 
              i: Globe,
              v: "Visibilidade Total"
            },
            { 
              t: "Dicionário de Dados", 
              d: "Definição exata de cálculos para zerar divergências na NF.", 
              i: Database,
              v: "Precisão de Cálculo"
            },
            { 
              t: "Matriz de Riscos", 
              d: "Identificação de gargalos para travamento direto no Backend.", 
              i: AlertTriangle,
              v: "Prevenção de Erros"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-zinc-900 border border-white/10 p-10 rounded-[32px] flex flex-col items-center text-center h-full"
            >
              <item.i size={56} className="text-primary-blue-light mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">{item.t}</h3>
              <p className="text-xl text-zinc-400 font-light mb-8 flex-grow">{item.d}</p>
              <div className="px-6 py-2 bg-primary-blue/20 text-primary-blue-light rounded-full text-sm font-bold uppercase tracking-widest">
                {item.v}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-6xl font-black text-white bg-zinc-900 px-12 py-6 rounded-2xl border border-primary-blue/30"
        >
          R$ 18.000,00 <span className="text-2xl font-light text-zinc-500 uppercase tracking-[0.3em] ml-4 italic">Etapa de Viabilidade</span>
        </motion.div>
      </div>
    ),

    // Slide 6: Value Proposition & Viability
    (
      <div className="relative w-full h-full flex items-center justify-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <FlickeringGrid 
            squareSize={10} 
            gridGap={15} 
            color="#4169E1" 
            maxOpacity={0.15} 
            width={1920} 
            height={1080} 
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(65,105,225,0.15)_0%,_transparent_50%)]" />
        <div className="z-10 grid grid-cols-2 gap-20 max-w-7xl px-12 items-center">
          <div className="space-y-10">
            <h2 className="text-7xl font-black text-white leading-none tracking-tighter uppercase italic">
              Viabilidade <br />& <span className="text-primary-blue">Garantia</span>
            </h2>
            <p className="text-3xl text-zinc-400 font-light leading-relaxed">
              O mapeamento não é apenas um documento, é o <span className="text-white font-bold underline decoration-primary-blue">seguro contra o terceiro erro</span>.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="text-emerald-500" />
                </div>
                <span className="text-2xl text-white font-light italic">Valor 100% abatido na execução do projeto final.</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary-blue/20 flex items-center justify-center shrink-0">
                  <Shield className="text-primary-blue" />
                </div>
                <span className="text-2xl text-white font-light italic">Propriedade intelectual blindada da regra de negócio.</span>
              </div>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-primary-blue p-16 rounded-[60px] shadow-[0_0_100px_rgba(65,105,225,0.3)]"
          >
            <h3 className="text-4xl font-black text-black mb-6 uppercase tracking-tighter">O Objetivo Final:</h3>
            <p className="text-5xl font-bold text-white leading-tight tracking-tighter italic">
              Dormir com a <br />certeza de que <br />o software <br /><span className="text-black">TRABALHA</span> <br />PARA VOCÊ.
            </p>
          </motion.div>
        </div>
      </div>
    ),

    // Slide 7: Call to Action
    (
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-black">
        <div className="absolute inset-0 opacity-40">
           <FlickeringGrid 
            squareSize={10}
            gridGap={20}
            color="#4169E1"
            maxOpacity={0.2}
            flickerChance={0.05}
            width={1920}
            height={1080}
          />
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="z-10 text-center px-12"
        >
          <h2 className="text-8xl font-black text-white mb-8 tracking-tight italic">
            VAMOS <span className="text-primary-blue">CONSOLIDAR?</span>
          </h2>
          <p className="text-4xl text-zinc-400 font-light max-w-4xl mx-auto mb-16 leading-relaxed">
            Iniciando o Mapeamento Estratégico hoje para blindar o futuro do ERP FBS.
          </p>
          <div className="mt-24">
            <Logo iconClassName="w-16 h-16" textClassName="text-3xl" />
          </div>
        </motion.div>
      </div>
    )
  ];

  useEffect(() => {
    const handleResize = () => {
      const targetWidth = 1920;
      const targetHeight = 1080;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      const scaleX = windowWidth / targetWidth;
      const scaleY = windowHeight / targetHeight;
      
      // Choose the scale that fits the box inside the viewport (contain)
      setScale(Math.min(scaleX, scaleY));
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      } else if (e.key === 'r' || e.key === 'R') {
        setCurrentSlide(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-advance disabled by user request
  /*
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [currentSlide]);
  */

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* 16:9 Container */}
      <div 
        ref={containerRef}
        className="relative bg-black shadow-2xl overflow-hidden pointer-events-none select-none"
        style={{
          width: '1920px',
          height: '1080px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          flexShrink: 0
        }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} isActive={index === currentSlide}>
            {slide}
          </Slide>
        ))}

        {/* Navigation Indicator Overlay */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
          {slides.map((_, i) => (
            <motion.div 
              key={i}
              animate={{ 
                width: i === currentSlide ? 40 : 12,
                opacity: i === currentSlide ? 1 : 0.3
              }}
              className="h-3 rounded-full bg-white transition-all duration-500"
            />
          ))}
        </div>
      </div>
      
      {/* Hidden controls for presenter (mapped to keyboard) */}
      <div className="sr-only">
        <button onClick={prevSlide}>Anterior</button>
        <button onClick={nextSlide}>Próximo</button>
      </div>
    </div>
  );
};

export default App;
