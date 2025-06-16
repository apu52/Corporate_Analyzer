
import React from 'react';
import { Heart, Lightbulb, Users, Zap } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical principles in everything we do, building trust with our clients and team members.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously push boundaries and embrace new technologies to solve complex workplace challenges with creative solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and foster an inclusive environment where diverse perspectives drive better outcomes.'
    },
    {
      icon: Zap,
      title: 'Impact',
      description: 'We are committed to making a meaningful difference in organizations and the lives of employees through our work and solutions.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our decisions, shape our culture, and drive our mission forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto hover:bg-blue-200 transition-colors">
                <value.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
