import React, { useState } from 'react';
import api from '../api/axios';
import { PrimaryButton } from './Buttons';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess('');
    try {
      // Adjust endpoint as needed
      const response = await api.post('/api/accounts/login/', form);
      // Assume backend returns { access: '...', refresh: '...' }
      if (response.data && response.data.access) {
        localStorage.setItem('access_token', response.data.access);
        if (response.data.refresh) {
          localStorage.setItem('refresh_token', response.data.refresh);
        }
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => navigate('/'), 1000);
      } else {
        setErrors({ non_field_errors: ['No token received from server.'] });
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setErrors(err.response.data);
      } else {
        setErrors({ non_field_errors: ['Something went wrong.'] });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-white-50 to-sky-100 px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center w-full max-w-md p-10">
        <h2 className="text-3xl font-extrabold text-sky-700 mb-2 text-center">Login</h2>
        <p className="text-gray-600 text-center mb-6">Welcome back!</p>
        {success && <div className="mb-4 text-green-600 text-center">{success}</div>}
        {errors.non_field_errors && (
          <div className="mb-4 text-red-600 text-center">{errors.non_field_errors.join(' ')}</div>
        )}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full px-6 py-4 text-xl rounded-xl border-2 border-sky-200 focus:border-sky-500 outline-none transition" />
          <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" className="w-full px-6 py-4 text-xl rounded-xl border-2 border-sky-200 focus:border-sky-500 outline-none transition" />
          {/* Error messages for each field */}
          {Object.entries(errors).map(([field, msgs]) =>
            field !== 'non_field_errors' && (
              <div key={field} className="text-red-500 text-sm">{Array.isArray(msgs) ? msgs.join(' ') : msgs}</div>
            )
          )}
          <PrimaryButton type="submit" className="w-full mt-2 py-4 text-xl" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </PrimaryButton>
        </form>
        <div className="mt-6 text-center text-lg">
          Don't have an account?{' '}
          <Link to="/register" className="text-sky-700 font-semibold hover:underline">Register here</Link>
        </div>
      </div>
    </div>
  );
} 