import { Users, Award, Target, Calendar } from 'lucide-react';

const Teams = () => {
  const teams = [
    {
      name: 'Thunder Rollers',
      founded: '2018',
      championships: 3,
      players: 24,
      description: 'The defending champions with an aggressive playing style and exceptional teamwork.',
      color: 'from-blue-500 to-blue-600',
      stats: { wins: 15, losses: 1, draws: 2 }
    },
    {
      name: 'Lightning Bolts',
      founded: '2017',
      championships: 2,
      players: 22,
      description: 'Known for their lightning-fast attacks and solid defensive strategies.',
      color: 'from-yellow-500 to-orange-500',
      stats: { wins: 13, losses: 2, draws: 3 }
    },
    {
      name: 'Fire Dragons',
      founded: '2019',
      championships: 1,
      players: 26,
      description: 'A young team with fierce determination and innovative playing techniques.',
      color: 'from-red-500 to-red-600',
      stats: { wins: 12, losses: 2, draws: 4 }
    },
    {
      name: 'Storm Chasers',
      founded: '2016',
      championships: 2,
      players: 25,
      description: 'Veterans of the league with consistent performance and strong leadership.',
      color: 'from-purple-500 to-purple-600',
      stats: { wins: 11, losses: 4, draws: 3 }
    },
    {
      name: 'Ice Wolves',
      founded: '2020',
      championships: 0,
      players: 23,
      description: 'Rising stars with cool composure under pressure and tactical brilliance.',
      color: 'from-cyan-500 to-blue-500',
      stats: { wins: 9, losses: 4, draws: 5 }
    },
    {
      name: 'Golden Eagles',
      founded: '2015',
      championships: 4,
      players: 27,
      description: 'The most successful team in league history with a legacy of excellence.',
      color: 'from-yellow-600 to-yellow-700',
      stats: { wins: 8, losses: 6, draws: 4 }
    }
  ];

  return (
    <section id="teams" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Teams</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the incredible teams that make our league the most exciting rollball competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <div
              key={team.name}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Team Header */}
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${team.color} rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-2xl">{team.name.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{team.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{team.description}</p>
              </div>

              {/* Team Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                  <Calendar className="h-5 w-5 text-primary-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-800">{team.founded}</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                  <Award className="h-5 w-5 text-accent-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-800">{team.championships}</div>
                  <div className="text-sm text-gray-600">Titles</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                  <Users className="h-5 w-5 text-primary-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-800">{team.players}</div>
                  <div className="text-sm text-gray-600">Players</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                  <Target className="h-5 w-5 text-accent-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-800">{team.stats.wins}</div>
                  <div className="text-sm text-gray-600">Wins</div>
                </div>
              </div>

              {/* Season Record */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 text-center">Season Record</h4>
                <div className="flex justify-between text-sm">
                  <div className="text-center">
                    <div className="text-green-600 font-bold text-lg">{team.stats.wins}</div>
                    <div className="text-gray-600">W</div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-600 font-bold text-lg">{team.stats.draws}</div>
                    <div className="text-gray-600">D</div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-600 font-bold text-lg">{team.stats.losses}</div>
                    <div className="text-gray-600">L</div>
                  </div>
                </div>
              </div>

              {/* View Team Button */}
              <button className={`w-full bg-gradient-to-r ${team.color} text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                View Team Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;