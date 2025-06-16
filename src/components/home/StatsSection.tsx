
import React from 'react';
import { TrendingUp, Users, Clock, Globe } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Completion Rate',
      description: 'Average survey completion',
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: TrendingUp,
      value: '3.5x',
      label: 'ROI Improvement',
      description: 'Return on investment',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Clock,
      value: '24h',
      label: 'Response Time',
      description: 'Average support response',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Globe,
      value: '500+',
      label: 'Global Clients',
      description: 'Companies worldwide',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 to-blue-50/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join thousands of organizations that have transformed their workplace culture with our platform
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-indigo-200 transform hover:-translate-y-2">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-slate-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-600">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
