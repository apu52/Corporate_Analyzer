
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SurveyForm from '@/components/survey/SurveyForm';
import { Sparkles, Users, BarChart3 } from 'lucide-react';

const Survey = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      {/* Hero Section */}
      <div className="py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-indigo-200/50 shadow-lg mb-6">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-slate-700">Your Voice Matters</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Employee Engagement{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Survey
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Help us understand your workplace experience and contribute to building a better organizational culture. 
              Your feedback drives meaningful change.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center space-x-8 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mb-2 mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-900">10K+</div>
                <div className="text-sm text-slate-600">Responses</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl mb-2 mx-auto">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-900">98%</div>
                <div className="text-sm text-slate-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mb-2 mx-auto">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-900">5 min</div>
                <div className="text-sm text-slate-600">Average Time</div>
              </div>
            </div>
          </div>
          
          <SurveyForm />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Survey;
