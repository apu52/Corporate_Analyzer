
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TeamMembers = () => {
  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'VP of Engineering',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&q=80',
      description: 'Leading our technical vision with expertise in scalable systems and machine learning. Former Google engineer with 12+ years experience.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      description: 'Passionate about user experience and product strategy. Previously led product teams at Microsoft and Slack with focus on enterprise solutions.'
    },
    {
      name: 'Emily Chen',
      role: 'VP of Customer Success',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
      description: 'Dedicated to ensuring our clients achieve maximum value from our platform. 10+ years in customer success and organizational development.'
    },
    {
      name: 'James Wilson',
      role: 'Lead Data Scientist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      description: 'Expert in analytics and machine learning algorithms that power our insights. PhD in Statistics from MIT with focus on behavioral analytics.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals who make Corporate-Analyzer possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                  />
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
