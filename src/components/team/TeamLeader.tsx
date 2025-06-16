
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamLeader = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Leadership
          </h2>
          <p className="text-xl text-gray-600">Meet the visionary leading our mission</p>
        </div>

        <Card className="shadow-xl border-0 max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
              />
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900">David Thompson</h3>
                <p className="text-lg text-blue-600 font-semibold">Chief Executive Officer & Founder</p>
              </div>
              
              <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
                With over 15 years of experience in HR technology and organizational psychology, David founded 
                Corporate-Analyzer with a vision to democratize workplace insights. He holds an MBA from Stanford 
                and has previously led product teams at Fortune 500 companies.
              </p>
              
              <div className="flex justify-center space-x-4">
                <button className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </button>
                <button className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5 text-blue-600" />
                </button>
                <button className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TeamLeader;
