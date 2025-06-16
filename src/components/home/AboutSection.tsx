
import React from 'react';
import { Target, Users, Award, Globe } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower organizations with actionable insights that drive meaningful change and improve workplace culture.'
    },
    {
      icon: Users,
      title: 'Our Values',
      description: 'Integrity, innovation, and collaboration are at the heart of everything we do for our clients and partners.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every solution, ensuring the highest quality and reliability for our users.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Making a positive impact on organizations worldwide through data-driven insights and solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Corporate-Analyzer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to transform how organizations understand and engage with their workforce through powerful analytics and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Transforming Organizations Through Data
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2020, Corporate-Analyzer has helped over 500 organizations worldwide improve employee engagement, 
              reduce turnover, and create more inclusive workplace cultures. Our platform combines advanced analytics with 
              intuitive design to make data-driven decision making accessible to everyone.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that every voice matters, and our technology ensures that every employee's feedback is heard, 
              analyzed, and acted upon. From startups to Fortune 500 companies, we're proud to be the trusted partner 
              for organizations committed to creating better workplaces.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <value.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">
                {value.title}
              </h4>
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

export default AboutSection;
