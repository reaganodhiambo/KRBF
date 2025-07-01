import api from "./axios";
import { endpoints } from "./endpoints";

// --- COMPETITIONS ---
export const fetchCompetitions = () => api.get(endpoints.competitions);
export const getCompetition = (id) => api.get(`${endpoints.competitions}${id}/`);
export const createCompetition = (data) => api.post(endpoints.competitions, data);

// --- FIXTURES ---
export const fetchFixtures = () => api.get(endpoints.fixtures);
export const getFixture = (id) => api.get(`${endpoints.fixtures}${id}/`);
export const createFixture = (data) => api.post(endpoints.fixtures, data);

// --- RESULTS ---
export const fetchResults = () => api.get(endpoints.results);
export const getResult = (id) => api.get(`${endpoints.results}${id}/`);
export const createResult = (data) => api.post(endpoints.results, data);

// --- STANDINGS ---
export const fetchStandings = () => api.get(endpoints.standings);
export const getStanding = (id) => api.get(`${endpoints.standings}${id}/`);
export const createStanding = (data) => api.post(endpoints.standings, data);

// --- PLAYER MATCH STATS ---
export const fetchPlayerMatchStats = () => api.get(endpoints.playerMatchStats);
export const getPlayerMatchStat = (id) => api.get(`${endpoints.playerMatchStats}${id}/`);
export const createPlayerMatchStat = (data) => api.post(endpoints.playerMatchStats, data); 