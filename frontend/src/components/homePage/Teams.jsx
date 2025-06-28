import React, { useState } from 'react';
import { menStandings, ladiesStandings } from '../../assets/data';
import { Users, Award, Target, Calendar } from 'lucide-react';
import { PrimaryButton } from '../Buttons';

const TeamCard = ({ team, color }) => (
  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up border border-gray-100">
    <div className="text-center mb-6">
      <div className={`w-20 h-20 bg-gradient-to-r ${color} rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-lg`}>
        <span className="text-white font-bold text-2xl">{team.short}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{team.team}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{team.description || ''}</p>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-gray-50 rounded-2xl p-4 text-center">
        <Calendar className="h-5 w-5 text-primary-500 mx-auto mb-2" />
        <div className="text-lg font-bold text-gray-800">{team.founded || '-'}</div>
        <div className="text-sm text-gray-600">Founded</div>
      </div>
      <div className="bg-gray-50 rounded-2xl p-4 text-center">
        <Award className="h-5 w-5 text-accent-500 mx-auto mb-2" />
        <div className="text-lg font-bold text-gray-800">{team.championships || '-'}</div>
        <div className="text-sm text-gray-600">Titles</div>
      </div>
      <div className="bg-gray-50 rounded-2xl p-4 text-center">
        <Users className="h-5 w-5 text-primary-500 mx-auto mb-2" />
        <div className="text-lg font-bold text-gray-800">{team.players || '-'}</div>
        <div className="text-sm text-gray-600">Players</div>
      </div>
      <div className="bg-gray-50 rounded-2xl p-4 text-center">
        <Target className="h-5 w-5 text-accent-500 mx-auto mb-2" />
        <div className="text-lg font-bold text-gray-800">{team.won}</div>
        <div className="text-sm text-gray-600">Wins</div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 mb-6">
      <h4 className="text-sm font-semibold text-gray-700 mb-3 text-center">Season Record</h4>
      <div className="flex justify-between text-sm">
        <div className="text-center">
          <div className="text-green-600 font-bold text-lg">{team.won}</div>
          <div className="text-gray-600">W</div>
        </div>
        <div className="text-center">
          <div className="text-yellow-600 font-bold text-lg">{team.drawn}</div>
          <div className="text-gray-600">D</div>
        </div>
        <div className="text-center">
          <div className="text-red-600 font-bold text-lg">{team.lost}</div>
          <div className="text-gray-600">L</div>
        </div>
      </div>
    </div>
    <PrimaryButton className={`w-full bg-gradient-to-r ${color} text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
      View Team Details
    </PrimaryButton>
  </div>
);

const TableRow = ({ team, idx }) => (
  <tr className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
    <td className="px-4 py-4 text-lg font-bold text-gray-700">{idx + 4}</td>
    <td className="px-4 py-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-2xl bg-sky-100 flex items-center justify-center text-xl font-bold text-sky-700">
        {team.short}
      </div>
      <span className="font-semibold text-gray-800">{team.team}</span>
    </td>
    <td className="px-2 py-4 text-center text-lg">{team.played}</td>
    <td className="px-2 py-4 text-center text-lg">{team.won}</td>
    <td className="px-2 py-4 text-center text-lg">{team.drawn}</td>
    <td className="px-2 py-4 text-center text-lg">{team.lost}</td>
    <td className="px-2 py-4 text-center text-lg font-bold text-sky-700">{team.points}</td>
    <td className="px-2 py-4 text-center">
      <div className="flex gap-1 justify-center">
        {team.form.map((f, i) => (
          <span key={i} className={`px-2 py-1 rounded-lg text-xs font-bold ${f === 'W' ? 'bg-green-200 text-green-700' : f === 'D' ? 'bg-yellow-200 text-yellow-700' : 'bg-red-200 text-red-700'}`}>{f}</span>
        ))}
      </div>
    </td>
  </tr>
);

const teamColors = [
  'from-blue-500 to-blue-600',
  'from-yellow-500 to-orange-500',
  'from-red-500 to-red-600',
  'from-purple-500 to-purple-600',
  'from-cyan-500 to-blue-500',
  'from-yellow-600 to-yellow-700',
  'from-pink-500 to-pink-600',
  'from-green-500 to-green-600',
];

const Teams = () => {
  const [tab, setTab] = useState('men');
  const men = menStandings;
  const ladies = ladiesStandings;
  const top3 = tab === 'men' ? men.slice(0, 3) : ladies.slice(0, 3);
  const rest = tab === 'men' ? men.slice(3) : ladies.slice(3);

  return (
    <section id="teams" className="min-h-screen mt-16 flex flex-col items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-700 mb-6">
            Our Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the incredible teams that make our league the most exciting rollball competition.
          </p>
        </div>
        <div className="flex justify-center gap-4 mb-8">
          <button className={`px-6 py-2 rounded-2xl font-semibold text-lg transition-colors duration-200 focus:outline-none ${tab === 'men' ? 'bg-sky-600 text-white shadow' : 'bg-gray-100 text-sky-700 hover:bg-sky-200'}`} onClick={() => setTab('men')}>Men</button>
          <button className={`px-6 py-2 rounded-2xl font-semibold text-lg transition-colors duration-200 focus:outline-none ${tab === 'ladies' ? 'bg-pink-600 text-white shadow' : 'bg-gray-100 text-pink-700 hover:bg-pink-200'}`} onClick={() => setTab('ladies')}>Ladies</button>
        </div>
        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {top3.map((team, idx) => (
            <TeamCard key={team.team} team={team} color={teamColors[idx % teamColors.length]} />
          ))}
        </div>
        {/* Rest in Table */}
        {rest.length > 0 && (
          <div className="overflow-x-auto rounded-3xl shadow-lg bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">#</th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Team</th>
                  <th className="px-2 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">P</th>
                  <th className="px-2 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">W</th>
                  <th className="px-2 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">D</th>
                  <th className="px-2 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">L</th>
                  <th className="px-2 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Pts</th>
                  <th className="px-2 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Form</th>
                </tr>
              </thead>
              <tbody>
                {rest.map((team, idx) => (
                  <TableRow key={team.team} team={team} idx={idx} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default Teams;
