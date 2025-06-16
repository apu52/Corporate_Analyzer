
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';

const AnalyticsSection = () => {
  const data = [
    { month: 'Jan', engagement: 65, satisfaction: 72, retention: 68 },
    { month: 'Feb', engagement: 68, satisfaction: 75, retention: 71 },
    { month: 'Mar', engagement: 72, satisfaction: 78, retention: 75 },
    { month: 'Apr', engagement: 75, satisfaction: 82, retention: 78 },
    { month: 'May', engagement: 78, satisfaction: 85, retention: 82 },
    { month: 'Jun', engagement: 82, satisfaction: 88, retention: 85 }
  ];

  return (
    <section id="analytics" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-20 w-64 h-64 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-indigo-200/50 shadow-lg mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-700">Real-time Insights</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Actionable Analytics
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get real-time insights into employee engagement, satisfaction trends, and organizational health metrics with our advanced analytics dashboard.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-slate-200/50">
          <div className="mb-8 flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Employee Engagement Dashboard</h3>
              <p className="text-slate-600">Track key metrics and identify trends across your organization</p>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                <span className="text-sm text-slate-600">Engagement</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                <span className="text-sm text-slate-600">Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                <span className="text-sm text-slate-600">Retention</span>
              </div>
            </div>
          </div>
          
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.05}/>
                  </linearGradient>
                  <linearGradient id="satisfactionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.05}/>
                  </linearGradient>
                  <linearGradient id="retentionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Area
                  type="monotone"
                  dataKey="engagement"
                  stroke="#6366f1"
                  strokeWidth={3}
                  fill="url(#engagementGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="satisfaction"
                  stroke="#10b981"
                  strokeWidth={3}
                  fill="url(#satisfactionGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="retention"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  fill="url(#retentionGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-200">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">82%</div>
              <div className="text-sm text-slate-600">Current Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">88%</div>
              <div className="text-sm text-slate-600">Satisfaction Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">85%</div>
              <div className="text-sm text-slate-600">Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
