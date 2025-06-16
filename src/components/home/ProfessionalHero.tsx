
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Sparkles, Users, BarChart3, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfessionalHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 overflow-hidden min-h-screen flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-indigo-200/50 shadow-lg">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-medium text-slate-700">🚀 Transform Your Organization Today</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Make Every{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Voice
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-indigo-200/40 via-purple-200/40 to-blue-200/40 rounded-lg transform -skew-x-12"></div>
              </span>{' '}
              Count
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              Transform employee feedback into actionable insights with our powerful AI-driven analytics platform. 
              Drive engagement, improve retention, and make data-driven decisions that matter.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 my-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-indigo-200/50 shadow-lg transform hover:scale-105 transition-all duration-300">
                <BarChart3 className="w-8 h-8 text-emerald-500 mb-2 mx-auto" />
                <div className="text-2xl font-bold text-slate-900">98%</div>
                <div className="text-xs text-slate-600">Accuracy</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-indigo-200/50 shadow-lg transform hover:scale-105 transition-all duration-300 delay-100">
                <Users className="w-8 h-8 text-blue-500 mb-2 mx-auto" />
                <div className="text-2xl font-bold text-slate-900">10K+</div>
                <div className="text-xs text-slate-600">Users</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-indigo-200/50 shadow-lg transform hover:scale-105 transition-all duration-300 delay-200">
                <Shield className="w-8 h-8 text-purple-500 mb-2 mx-auto" />
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-xs text-slate-600">Secure</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/survey">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 rounded-xl border-2 border-slate-300 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse delay-300"></div>
                <span>14-day free trial</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-indigo-200/50">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
                  alt="Professional business team collaborating"
                  className="rounded-2xl w-full h-auto shadow-lg"
                />
                
                {/* Floating Analytics Card */}
                
                {/* Floating User Card */}
                
              </div>

              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl transform rotate-6 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHero;
