
import React from 'react';
import { BarChart3, Users, Shield, Zap, Globe, Target, Brain, Heart, Rocket, Award, MessageSquare, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze patterns and predict engagement trends with 95% accuracy.',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools that bring teams together and enhance communication across all departments.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, SSO integration, and compliance certifications.',
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: Rocket,
      title: 'Automated Workflows',
      description: 'Streamline processes with intelligent automation and reduce manual work by up to 80%.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Built for organizations of all sizes, from startups to Fortune 500 companies worldwide.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Insights',
      description: 'Get instant feedback and track progress with live dashboards and customizable reporting.',
      color: 'from-cyan-500 to-blue-600'
    },
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full px-4 py-2 border border-indigo-200/50 shadow-lg mb-4">
            <Award className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-slate-700">Industry Leading Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Powerful Features for Modern Organizations
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to transform your organization's voice into actionable insights and drive meaningful change across every level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex items-center text-indigo-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Learn more →
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
