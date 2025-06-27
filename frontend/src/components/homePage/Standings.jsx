import React, { useState } from 'react';
import { menStandings, ladiesStandings } from '../../assets/data';


const tabClasses = (active) =>
  `px-6 py-2 rounded-2xl font-semibold text-lg transition-colors duration-200 focus:outline-none ${
    active
      ? 'bg-sky-600 text-white shadow'
      : 'bg-gray-100 text-sky-700 hover:bg-sky-200'
  }`;

const formBadge = (result) => {
  switch (result) {
    case 'W':
      return 'bg-green-100 text-green-700';
    case 'D':
      return 'bg-yellow-100 text-yellow-700';
    case 'L':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const getRowBg = (idx) => {
  if (idx < 4) return 'bg-gradient-to-r from-green-50 to-green-100'; // Championship
  if (idx < 6) return 'bg-gradient-to-r from-sky-50 to-sky-100'; // Playoff
  return 'bg-white'; // Regular
};

const Standings = () => {
  const [tab, setTab] = useState('men');
  const data = tab === 'men' ? menStandings : ladiesStandings;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-sky-50 py-20 px-4">
      <div className="max-w-5xl w-full mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            League <span className="bg-gradient-to-r from-sky-600 to-amber-500 bg-clip-text text-transparent">Standings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track your favorite teams' performance throughout the season.
          </p>
        </div>
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button className={tabClasses(tab === 'men')} onClick={() => setTab('men')}>Men</button>
          <button className={tabClasses(tab === 'ladies')} onClick={() => setTab('ladies')}>Ladies</button>
        </div>
        {/* Table */}
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
              {data.map((team, idx) => (
                <tr key={team.id} className={getRowBg(idx)}>
                  <td className="px-4 py-4 text-lg font-bold text-gray-700">{idx + 1}</td>
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
                        <span key={i} className={`px-2 py-1 rounded-lg text-xs font-bold ${formBadge(f)}`}>{f}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center text-sm">
          <span className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-green-100 inline-block"></span> Playoff Positions</span>
          <span className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-gray-100 inline-block"></span> Regular Positions</span>
        </div>
      </div>
    </section>
  );
};

export default Standings;