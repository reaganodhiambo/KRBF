import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '../Buttons';
import { Calendar, Activity, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-white-50 to-sky-100 mx-4 min-h-screen py-[100px] md:my-auto flex flex-col justify-center items-center bg-white px-4 overflow-hidden">
        <h1 className="text-5xl text-center max-w-4xl sm:text-7xl font-extrabold text-sky-700 mb-4 leading-tight">
          Kenya RollBall Federation
        </h1>
        <p className="max-w-2xl text-center mx-auto text-lg sm:text-xl text-gray-600 mb-10">
          Experience the thrill of rollball with live fixtures, team statistics, and championship standings all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <PrimaryButton as={Link} to="/standings">
            Table Standing
          </PrimaryButton>
          <SecondaryButton as={Link} to="/fixtures">
            View Fixtures
          </SecondaryButton>
          
        </div>
        <div className=" flex flex-col sm:flex-row gap-12 justify-center items-center mt-12">
          {/* Card 1: Upcoming Matches */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-b border-gray-200 px-8 py-6 w-56 h-48">
            <Calendar className="w-10 h-10 text-sky-700 mb-2" />
            <span className="text-3xl font-bold  mb-1">24</span>
            <span className="text-gray-600 text-base font-medium">Upcoming Matches</span>
          </div>
          {/* Card 2: Active Players */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-b border-gray-200 px-8 py-6 w-56 h-48">
            <Activity className="w-10 h-10 text-sky-700 mb-2" />
            <span className="text-3xl font-bold  mb-1">112</span>
            <span className="text-gray-600 text-base font-medium">Active Players</span>
          </div>
          {/* Card 3: Registered Teams */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-b border-gray-200 px-8 py-6 w-56 h-48">
            <Users className="w-10 h-10 text-sky-700 mb-2" />
            <span className="text-3xl font-bold  mb-1">48</span>
            <span className="text-gray-600 text-base font-medium">Registered Teams</span>
          </div>
        </div>
    </section>
  );
}
