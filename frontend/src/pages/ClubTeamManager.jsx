import React, { useEffect, useState } from "react";
import {
  fetchClubs,
  createClub,
  fetchTeams,
  createTeam,
  fetchRegions,
  fetchUsers,
} from "../api/clubApi";

export default function ClubTeamManager() {
  // State for clubs and teams
  const [clubs, setClubs] = useState([]);
  const [teams, setTeams] = useState([]);
  const [regions, setRegions] = useState([]);
  const [users, setUsers] = useState([]);
  // Club form state
  const [clubForm, setClubForm] = useState({
    name: "",
    short_name: "",
    region: "",
    manager: "",
    coach: "",
    founded_year: "",
    contact_number: "",
    contact_email: "",
  });
  // Team form state
  const [teamForm, setTeamForm] = useState({
    name: "",
    club: "",
    category: "",
  });
  // Loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch clubs and teams on mount
  useEffect(() => {
    loadClubs();
    loadTeams();
    loadRegions();
    loadUsers();
  }, []);

  const loadClubs = async () => {
    try {
      const res = await fetchClubs();
      setClubs(res.data);
    } catch {
      setError("Failed to fetch clubs");
    }
  };

  const loadTeams = async () => {
    try {
      const res = await fetchTeams();
      setTeams(res.data);
    } catch {
      setError("Failed to fetch teams");
    }
  };

  const loadRegions = async () => {
    try {
      const res = await fetchRegions();
      setRegions(res.data);
    } catch {
      setError("Failed to fetch regions");
    }
  };

  const loadUsers = async () => {
    try {
      const res = await fetchUsers();
      setUsers(res.data);
    } catch {
      setError("Failed to fetch users");
    }
  };

  // Handle club form change
  const handleClubChange = (e) => {
    setClubForm({ ...clubForm, [e.target.name]: e.target.value });
  };

  // Handle team form change
  const handleTeamChange = (e) => {
    setTeamForm({ ...teamForm, [e.target.name]: e.target.value });
  };

  // Submit club
  const handleClubSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await createClub(clubForm);
      setClubForm({
        name: "",
        short_name: "",
        region: "",
        manager: "",
        coach: "",
        founded_year: "",
        contact_number: "",
        contact_email: "",
      });
      loadClubs();
    } catch {
      setError("Failed to create club");
    }
    setLoading(false);
  };

  // Submit team
  const handleTeamSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await createTeam(teamForm);
      setTeamForm({
        name: "",
        club: "",
        category: "",
      });
      loadTeams();
    } catch {
      setError("Failed to create team");
    }
    setLoading(false);
  };

  return (
    <div className="mt-[100px] max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Club & Team Manager</h1>
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

      {/* Forms Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        {/* Club Creation Card */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Create Club</h2>
          <form onSubmit={handleClubSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Club Name</label>
              <input
                type="text"
                name="name"
                placeholder="Club Name"
                value={clubForm.name}
                onChange={handleClubChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Short Name</label>
              <input
                type="text"
                name="short_name"
                placeholder="Short Name"
                value={clubForm.short_name}
                onChange={handleClubChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Region</label>
              <select
                name="region"
                value={clubForm.region}
                onChange={handleClubChange}
                className="input input-bordered w-full"
                required
              >
                <option value="">Select Region</option>
                {regions.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Manager</label>
                <select
                  name="manager"
                  value={clubForm.manager}
                  onChange={handleClubChange}
                  className="input input-bordered w-full"
                  required
                >
                  <option value="">Select Manager</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.first_name} {user.last_name} ({user.email})
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Coach</label>
                <select
                  name="coach"
                  value={clubForm.coach}
                  onChange={handleClubChange}
                  className="input input-bordered w-full"
                  required
                >
                  <option value="">Select Coach</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.first_name} {user.last_name} ({user.email})
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Founded Year</label>
                <input
                  type="number"
                  name="founded_year"
                  placeholder="Founded Year"
                  value={clubForm.founded_year}
                  onChange={handleClubChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Contact Number</label>
                <input
                  type="text"
                  name="contact_number"
                  placeholder="Contact Number"
                  value={clubForm.contact_number}
                  onChange={handleClubChange}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Contact Email</label>
              <input
                type="email"
                name="contact_email"
                placeholder="Contact Email"
                value={clubForm.contact_email}
                onChange={handleClubChange}
                className="input input-bordered w-full"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full mt-2"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Club"}
            </button>
          </form>
        </div>

        {/* Team Creation Card */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Create Team</h2>
          <form onSubmit={handleTeamSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Team Name</label>
              <input
                type="text"
                name="name"
                placeholder="Team Name"
                value={teamForm.name}
                onChange={handleTeamChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Club</label>
              <select
                name="club"
                value={teamForm.club}
                onChange={handleTeamChange}
                className="input input-bordered w-full"
                required
              >
                <option value="">Select Club</option>
                {clubs.map((club) => (
                  <option key={club.id} value={club.id}>
                    {club.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                name="category"
                value={teamForm.category}
                onChange={handleTeamChange}
                className="input input-bordered w-full"
                required
              >
                <option value="">Select Category</option>
                <option value="men_senior">Men Senior</option>
                <option value="women_senior">Women Senior</option>
                <option value="men_junior">Men Junior</option>
                <option value="women_junior">Women Junior</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full mt-2"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Team"}
            </button>
          </form>
        </div>
      </div>

      {/* Display Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Clubs Card */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">All Clubs</h2>
          <div className="space-y-4">
            {clubs.map((club) => (
              <div key={club.id} className="rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col gap-1 bg-gray-50">
                <div className="font-bold text-lg text-blue-900">{club.name} <span className="text-gray-500">({club.short_name})</span></div>
                <div className="text-sm text-gray-700">Region: <span className="font-medium">{regions.find(r => r.id === club.region)?.name || club.region}</span></div>
                <div className="text-sm text-gray-700">Manager: <span className="font-medium">{users.find(u => u.id === club.manager)?.first_name || club.manager}</span></div>
                <div className="text-sm text-gray-700">Coach: <span className="font-medium">{users.find(u => u.id === club.coach)?.first_name || club.coach}</span></div>
                <div className="text-sm text-gray-700">Founded: <span className="font-medium">{club.founded_year || "N/A"}</span></div>
                <div className="text-sm text-gray-700">Contact: <span className="font-medium">{club.contact_number || "N/A"}</span> | <span className="font-medium">{club.contact_email || "N/A"}</span></div>
              </div>
            ))}
          </div>
        </div>

        {/* Teams Card */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">All Teams</h2>
          <div className="space-y-4">
            {teams.map((team) => (
              <div key={team.id} className="rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col gap-1 bg-gray-50">
                <div className="font-bold text-lg text-blue-900">{team.name}</div>
                <div className="text-sm text-gray-700">Category: <span className="font-medium">{team.category}</span></div>
                <div className="text-sm text-gray-700">Club: <span className="font-medium">{clubs.find(c => c.id === team.club)?.name || team.club}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
