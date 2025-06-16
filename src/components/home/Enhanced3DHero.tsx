
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Sparkles, Zap, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Enhanced3DHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      const floatingElements = heroRef.current.querySelectorAll('.floating-element');
      floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        (element as HTMLElement).style.transform = `translate(${xPercent * speed}px, ${yPercent * speed}px) rotateX(${yPercent * 5}deg) rotateY(${xPercent * 5}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="floating-element absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="floating-element absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating geometric shapes */}
        <div className="floating-element absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl rotate-45 opacity-20 animate-bounce"></div>
        <div className="floating-element absolute top-3/4 right-1/4 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-30 animate-pulse delay-300"></div>
        <div className="floating-element absolute top-1/2 left-3/4 w-12 h-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-lg rotate-12 opacity-25 animate-bounce delay-700"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium text-white">🚀 Transform Your Organization Today</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Make Every{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                  Voice
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-lg animate-pulse"></div>
              </span>{' '}
              Count
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Transform employee feedback into actionable insights with our powerful AI-driven analytics platform. 
              Drive engagement, improve retention, and make data-driven decisions that matter.
            </p>

            {/* 3D Stats Cards */}
            <div className="grid grid-cols-3 gap-4 my-8">
              <div className="floating-element bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 transform hover:scale-105 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-emerald-400 mb-2 mx-auto" />
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-xs text-slate-300">Accuracy</div>
              </div>
              <div className="floating-element bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 transform hover:scale-105 transition-all duration-300 delay-100">
                <Target className="w-8 h-8 text-blue-400 mb-2 mx-auto" />
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-xs text-slate-300">Users</div>
              </div>
              <div className="floating-element bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 transform hover:scale-105 transition-all duration-300 delay-200">
                <Zap className="w-8 h-8 text-yellow-400 mb-2 mx-auto" />
                <div className="text-2xl font-bold text-white">5 min</div>
                <div className="text-xs text-slate-300">Setup</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/survey">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group border-0">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-125 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-pulse"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-pulse delay-300"></div>
                <span>14-day free trial</span>
              </div>
            </div>
          </div>

          {/* Right side - 3D Dashboard Preview */}
          <div className="relative perspective-1000">
            <div className="floating-element transform-gpu transition-transform duration-300 hover:rotate-y-12 hover:rotate-x-6">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                {/* Mock Dashboard */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">Analytics Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                  
                  {/* Charts */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-2xl p-4">
                      <div className="h-20 bg-gradient-to-t from-blue-500/50 to-blue-300/30 rounded-lg relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-blue-500/70 to-transparent animate-pulse"></div>
                      </div>
                      <p className="text-white/80 text-xs mt-2">Engagement</p>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4">
                      <div className="h-20 bg-gradient-to-t from-emerald-500/50 to-emerald-300/30 rounded-lg relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-emerald-500/70 to-transparent animate-pulse delay-200"></div>
                      </div>
                      <p className="text-white/80 text-xs mt-2">Satisfaction</p>
                    </div>
                  </div>
                  
                  {/* Progress Bars */}
                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-xl p-3">
                      <div className="flex justify-between text-white/80 text-xs mb-2">
                        <span>Response Rate</span>
                        <span>94%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[94%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3">
                      <div className="flex justify-between text-white/80 text-xs mb-2">
                        <span>Team Collaboration</span>
                        <span>87%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[87%] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enhanced3DHero;
