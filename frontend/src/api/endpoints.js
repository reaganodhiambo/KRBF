const API_PREFIX = "/api";

export const endpoints = {
  regions: `${API_PREFIX}clubs/regions/`,
  clubs: `${API_PREFIX}/clubs/clubs/`,
  teams: `${API_PREFIX}/clubs/teams/`,
  players: `${API_PREFIX}clubs/players/`,
  competitions: `${API_PREFIX}/competitions/`,
  fixtures: `${API_PREFIX}/core/fixtures/`,
  results: `${API_PREFIX}/core/results/`,
  standings: `${API_PREFIX}/core/standings/`,
  playerMatchStats: `${API_PREFIX}/core/player-match-stats/`,
}; 