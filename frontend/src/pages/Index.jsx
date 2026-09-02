import React, { useState, useCallback } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { UploadCard } from '@/components/UploadCard';
import { AnalysisResult } from '@/components/AnalysisResult';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

// IMPORT YOUR IMAGES HERE:
import bgImage1 from '../../public/image1-clean.png'; 
import bgImage2 from '../../public/image2.png'; 

const Index = () => {
  const [analysisState, setAnalysisState] = useState('idle');
  const [result, setResult] = useState(null);

  const handleAnalysisComplete = useCallback((analysisResult) => {
    console.log('Analysis complete:', analysisResult);
    setResult(analysisResult);
    setAnalysisState('complete');
  }, []);

  const handleReset = useCallback(() => {
    setAnalysisState('idle');
    setResult(null);
  }, []);

  return (
    <div className="min-h-screen bg-[#1c1814] text-[#e8dfce] selection:bg-amber-900 selection:text-amber-50">
      
      {/* Institutional Header Banner */}
      <header className="relative z-30 w-full border-b border-[#d4af37]/30 bg-black/85 backdrop-blur-md py-2.5 px-4 md:px-8 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#d4af37] font-bold tracking-wider">
              PCE MAJOR PROJECT
            </span>
            <span className="text-[#e8dfce] font-semibold tracking-wide text-[11px] md:text-xs">
              Pillai College of Engineering, Navi Mumbai • Department of Computer Engineering
            </span>
          </div>
          <div className="text-[#c3b699] text-[11px] tracking-wider text-center md:text-right">
            <span>Guide: <strong className="text-[#e8dfce]">Prof. Kirti Rana</strong> | Team: <strong className="text-[#e8dfce]">Pranav, Navaneeth, Vishagh, Tejas</strong></span>
          </div>
        </div>
      </header>

     <div 
        className="relative w-full min-h-[55vh] bg-cover bg-center bg-no-repeat flex flex-col"
        style={{ backgroundImage: `url(${bgImage1})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 w-full h-full flex-grow flex items-center justify-center">
          <HeroSection />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#1c1814] z-10"></div>
      </div>

      <div 
        className="relative w-full min-h-screen bg-cover bg-center bg-fixed flex flex-col"
        style={{ backgroundImage: `url(${bgImage2})` }}
      >
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#1c1814] to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]"></div>

        <main className="relative z-10 container mx-auto px-4 py-16 pb-20 flex-grow">
          {analysisState === 'idle' && (
            <section className="space-y-10 animate-fade-in">
              <div className="text-center bg-black/70 backdrop-blur-xl p-6 rounded-xl border border-[#d4af37]/50 max-w-2xl mx-auto shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
                <h2 
                  className="text-2xl md:text-3xl font-bold mb-3 text-[#d4af37] tracking-widest uppercase drop-shadow-md" 
                  style={{ fontFamily: 'Courier New, monospace' }}
                >
                  Upload Media for Forensic Analysis
                </h2>
                <p className="text-[#c3b699] text-sm md:text-base font-mono">
                  Multi-Branch Deepfake Verification: Images, Videos, and Audio Streams.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <UploadCard type="audio" onAnalysisComplete={handleAnalysisComplete} />
                <UploadCard type="image" onAnalysisComplete={handleAnalysisComplete} />
                <UploadCard type="video" onAnalysisComplete={handleAnalysisComplete} />
              </div>
            </section>
          )}

          {analysisState === 'complete' && result && (
            <section className="max-w-4xl mx-auto py-8 animate-fade-in">
              {/* Header sitting directly on the "desk" */}
              <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 px-4">
                <div>
                  <h2 
                    className="text-2xl md:text-3xl font-bold mb-2 text-[#d4af37] uppercase tracking-wider drop-shadow-md" 
                    style={{ fontFamily: 'Courier New, monospace' }}
                  >
                    Investigation Concluded
                  </h2>
                  <p className="text-[#c3b699] font-mono tracking-widest text-sm">
                    ► FORENSIC CASE FILE GENERATED
                  </p>
                </div>
                
                {/* Brutalist Typewriter Style Button */}
                <Button 
                  onClick={handleReset} 
                  className="rounded-none bg-[#1c1814] border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1c1814] font-mono tracking-widest uppercase transition-all shadow-[4px_4px_0_#d4af37] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Analyze Another File
                </Button>
              </div>
              
              {/* The physical paper component */}
              <AnalysisResult result={result} />
            </section>
          )}
        </main>
        
        {/* Academic Project Footer */}
        <footer className="relative w-full z-10 border-t border-[#d4af37]/40 py-8 bg-black/90 backdrop-blur-xl mt-auto shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
          <div className="container mx-auto px-4 text-center text-[10px] md:text-xs text-[#8c7b5a] uppercase tracking-widest font-mono space-y-2">
            <p className="text-[#d4af37] font-bold">
              PILLAI COLLEGE OF ENGINEERING (NEW PANVEL, NAVI MUMBAI) — DEPARTMENT OF COMPUTER ENGINEERING
            </p>
            <p className="text-[#c3b699]">
              B.E. Final Year Major Project: AI-Driven Deepfake Image and Video Detection Framework
            </p>
            <p className="text-[10px] text-[#6e6047]">
              Architecture: MINTIME Multi-Identity Tracker | Dual ViT (FaceForensics++) | 2D FFT & DCT Frequency Analysis | Attention Enhancement | Audio DSP
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;