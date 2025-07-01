import React from 'react'
import { fixtures } from '../../assets/data';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../Buttons';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const Fixtures = () => {
    return (
        <section className='min-h-screen mt-20 sm:mt-10 flex flex-col justify-center items-center bg-sky-50 px-4 lg:px-8 my-4 md:py-16'>
            <div className="flex flex-col container">
                <h2 className="text-4xl md:text-6xl text-center font-bold text-sky-700 mb-4 md:mb-10 leading-tight">
                    Upcoming Fixtures
                </h2>
                <p className='text-xl text-center text-gray-600 max-w-2xl mx-auto mb-8'>
                    Don't miss the action! Check out our upcoming matches and mark your calendar.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-8">
                    {fixtures.map((fixture, index) => (
                        <div
                            key={fixture.id}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 animate-slide-up border border-gray-100"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {fixture.status === 'live' && (
                                <div className="flex items-center justify-center mb-4">
                                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                                        LIVE
                                    </span>
                                </div>
                            )}

                            <div className="flex items-center justify-between mb-6">
                                <div className="text-center flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{fixture.homeTeam}</h3>
                                    <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-sky-700 rounded-2xl mx-auto flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">H</span>
                                    </div>
                                </div>

                                <div className="text-center px-6">
                                    <div className="text-2xl font-bold text-gray-400 mb-2">VS</div>
                                    <div className="text-sm text-gray-500">
                                        {new Date(fixture.date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </div>
                                </div>

                                <div className="text-center flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{fixture.awayTeam}</h3>
                                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl mx-auto flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">A</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 text-gray-600">
                                <div className="flex items-center justify-center space-x-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{new Date(fixture.date).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</span>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{fixture.time}</span>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <MapPin className="h-4 w-4" />
                                    <span>{fixture.venue}</span>
                                </div>
                            </div>

                            <button className="w-full mt-6 bg-gradient-to-r from-sky-500 to-sky-700 text-white py-3 rounded-2xl font-semibold hover:from-sky-600 hover:to-sky-800 transition-all duration-300 transform hover:scale-105">
                                {fixture.status === 'live' ? 'Watch Live' : 'Get Tickets'}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center sm:mt-7">
                <PrimaryButton as={Link} to="/fixtures" >
                    View All Fixtures
                </PrimaryButton>
            </div>
                </div>
        </section>
    );
}
