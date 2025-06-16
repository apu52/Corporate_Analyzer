
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import TeamHero from '@/components/team/TeamHero';
import TeamLeader from '@/components/team/TeamLeader';
import TeamMembers from '@/components/team/TeamMembers';
import CoreValues from '@/components/team/CoreValues';
import JoinTeamCTA from '@/components/team/JoinTeamCTA';

const Team = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <TeamHero />
      <TeamLeader />
      <TeamMembers />
      <CoreValues />
      <JoinTeamCTA />
      <Footer />
    </div>
  );
};

export default Team;
