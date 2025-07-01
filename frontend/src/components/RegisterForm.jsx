import React, { useState } from 'react';
import api from '../api/axios';
import { PrimaryButton } from './Buttons';
import { Link } from 'react-router-dom';

const initialForm = {
  email: '',
  first_name: '',
  last_name: '',
  phone_number: '',
  user_type: '',
  password: '',
  password_confirm: '',
  date_of_birth: '',
  gender: '',
  address: '',
  profile_picture: null,
};

const userTypes = [
  { value: 'Federation Admin', label: 'Federation Admin' },
  { value: 'Club Manager', label: 'Club Manager' },
  { value: 'Coach', label: 'Coach' },
  { value: 'Player', label: 'Player' },
];

const genders = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
];

export default function RegisterForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile_picture') {
      setForm({ ...form, profile_picture: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess('');
    const formData = new FormData();
    formData.append('email', form.email);
    formData.append('first_name', form.first_name);
    formData.append('last_name', form.last_name);
    formData.append('phone_number', form.phone_number);
    formData.append('user_type', form.user_type);
    formData.append('password', form.password);
    formData.append('password_confirm', form.password_confirm);
    formData.append('profile.date_of_birth', form.date_of_birth);
    formData.append('profile.gender', form.gender);
    formData.append('profile.address', form.address);
    if (form.profile_picture) {
      formData.append('profile.profile_picture', form.profile_picture);
    }
    try {
      await api.post('/api/accounts/register/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccess('Registration successful! You can now log in.');
      setForm(initialForm);
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
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center w-full max-w-2xl p-10">
        <h2 className="text-3xl font-extrabold text-sky-700 mb-2 text-center">Create Your Account</h2>
        <p className="text-gray-600 text-center mb-6">Be part of the community!</p>
        {success && <div className="mb-4 text-green-600 text-center">{success}</div>}
        {errors.non_field_errors && (
          <div className="mb-4 text-red-600 text-center">{errors.non_field_errors.join(' ')}</div>
        )}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* First and Last Name side by side */}
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" name="first_name" value={form.first_name} onChange={handleChange} placeholder="First Name" className="w-full px-3 py-2 text-base rounded-lg border-2 border-sky-200 focus:border-sky-500 outline-none transition" />
            <input type="text" name="last_name" value={form.last_name} onChange={handleChange} placeholder="Last Name" className="w-full px-3 py-2 text-base rounded-lg border-2 border-sky-200 focus:border-sky-500 outline-none transition" />
          </div>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full px-3 py-2 text-base rounded-lg border-2 border-sky-200 focus:border-sky-500 outline-none transition" />
          <input type="text" name="phone_number" value={form.phone_number} onChange={handleChange} placeholder="Phone Number" className="w-full px-3 py-2 text-base rounded-lg border-2 border-sky-200 focus:border-sky-500 outline-none transition" />
          <select name="user_type" value={form.user_type} onChange={handleChange} className="w-full px-3 py-2 text-base rounded-lg border-2 border-sky-200 focus:border-sky-500 outline-none transition bg-white">
            <option value="">Select User Type</option>
            {userTypes.map((ut) => (
              <option key={ut.value} value={ut.value}>{ut.label}</option>
            ))}
          </select>
          {/* Password and Confirm Password side by side */}
          <div className="flex flex-col md:flex-row gap-4">
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" className="w-full px-3 py-2 text-base rounded-lg border-2 border-sky-200 focus:border-sky-500 outline-none transition" />
            <input type="password" name="password_confirm" value={form.password_confirm} onChange={handleChange} placeholder="Confirm Password" className="w-full px-3 py-2 text-base rounded-lg border-2 border-sky-200 focus:border-sky-500 outline-none transition" />
          </div>
          {/* Date of Birth and Gender side by side */}
          <div className="flex flex-col md:flex-row gap-4">
            <input type="date" name="date_of_birth" value={form.date_of_birth} onChange={handleChange} placeholder="Date of Birth" className="w-full px-3 py-2 text-base rounded-lg border-2 border-sky-200 focus:border-sky-500 outline-none transition" />
            <select name="gender" value={form.gender} onChange={handleChange} className="w-full px-3 py-2 text-base rounded-lg border-2 border-sky-200 focus:border-sky-500 outline-none transition bg-white">
              <option value="">Select Gender</option>
              {genders.map((g) => (
                <option key={g.value} value={g.value}>{g.label}</option>
              ))}
            </select>
          </div>
          <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Address" className="w-full px-3 py-2 text-base rounded-lg border-2 border-sky-200 focus:border-sky-500 outline-none transition" />
          <input type="file" name="profile_picture" accept="image/*" onChange={handleChange} className="w-full px-3 py-2 text-base rounded-lg border-2 border-sky-200 focus:border-sky-500 outline-none transition bg-white" />
          {/* Error messages for each field */}
          {Object.entries(errors).map(([field, msgs]) =>
            field !== 'non_field_errors' && (
              <div key={field} className="text-red-500 text-sm">{Array.isArray(msgs) ? msgs.join(' ') : msgs}</div>
            )
          )}
          <PrimaryButton type="submit" className="w-full mt-2 py-2 text-base" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </PrimaryButton>
        </form>
        <div className="mt-6 text-center text-lg">
          Already have an account?{' '}
          <Link to="/login" className="text-sky-700 font-semibold hover:underline">Login here</Link>
        </div>
      </div>
    </div>
  );
} 