
import React from 'react';
import { Users, Award, Globe } from 'lucide-react';

const TeamHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Static professional background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80"
          alt="Professional diverse team"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-slate-200/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 py-24 flex flex-col items-center text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl px-10 py-8 border border-slate-200 shadow-2xl mb-12">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-indigo-50 text-indigo-700 border border-indigo-100 mb-5">
            <Users className="w-4 h-4 mr-2 text-indigo-600" />
            Meet Our Team
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 mb-5 leading-tight tracking-tight drop-shadow-lg">
            The Minds <span className="text-indigo-700">Behind Excellence</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experienced leaders, global experts, and creative thinkers powering forward innovation in analytics and HR solutions.
          </p>
          <a
            href="#team-members"
            className="inline-block px-12 py-4 mt-1 rounded-lg text-white font-semibold text-lg bg-gradient-to-r from-indigo-600 to-blue-600 shadow-md hover:from-indigo-700 hover:to-blue-700 hover-scale focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          >
            Meet Our Experts
          </a>
        </div>
        {/* Stats Row (Static) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-8">
          <div className="flex flex-col items-center bg-white border border-slate-150 rounded-xl px-10 py-8 shadow-lg transition hover:shadow-xl hover-scale">
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-indigo-600" />
            </div>
            <span className="text-3xl font-extrabold text-slate-900">25+</span>
            <span className="text-slate-700 font-semibold">Expert Team Members</span>
            <span className="text-xs text-slate-500 mt-2">Globally experienced</span>
          </div>
          <div className="flex flex-col items-center bg-white border border-slate-150 rounded-xl px-10 py-8 shadow-lg transition hover:shadow-xl hover-scale">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <span className="text-3xl font-extrabold text-slate-900">50+</span>
            <span className="text-slate-700 font-semibold">Years Combined Experience</span>
            <span className="text-xs text-slate-500 mt-2">In analytics & HR</span>
          </div>
          <div className="flex flex-col items-center bg-white border border-slate-150 rounded-xl px-10 py-8 shadow-lg transition hover:shadow-xl hover-scale">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <span className="text-3xl font-extrabold text-slate-900">15+</span>
            <span className="text-slate-700 font-semibold">Countries Represented</span>
            <span className="text-xs text-slate-500 mt-2">Trusted globally</span>
          </div>
        </div>
        {/* 94% Engagement stat, static & professional (not animated) */}
        <div className="mt-12 flex flex-col items-center">
          <span className="text-6xl font-extrabold text-indigo-700 drop-shadow">94%</span>
          <span className="text-lg text-slate-700 mt-2 font-semibold">Average Employee Engagement</span>
          <span className="text-xs text-slate-500">With our solutions, on average</span>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
