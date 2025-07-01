import api from "./axios";
import { endpoints } from "./endpoints";

// --- CLUBS ---
export const fetchClubs = () => api.get(endpoints.clubs);
export const getClub = (id) => api.get(`${endpoints.clubs}${id}/`);
export const createClub = (data) => api.post(endpoints.clubs, data);

// --- TEAMS ---
export const fetchTeams = () => api.get(endpoints.teams);
export const getTeam = (id) => api.get(`${endpoints.teams}${id}/`);
export const createTeam = (data) => api.post(endpoints.teams, data);

// --- PLAYERS ---
export const fetchPlayers = () => api.get(endpoints.players);
export const getPlayer = (id) => api.get(`${endpoints.players}${id}/`);
export const createPlayer = (data) => api.post(endpoints.players, data);

// --- REGIONS ---
export const fetchRegions = () => api.get(endpoints.regions);
export const getRegion = (id) => api.get(`${endpoints.regions}${id}/`);
export const createRegion = (data) => api.post(endpoints.regions, data);

// --- USERS ---
export const fetchUsers = () => api.get("/api/users/"); 