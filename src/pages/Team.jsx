import { useEffect, useState } from 'react';
import { useLanyard } from 'use-lanyard';

export default function Team() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { data: user } = useLanyard('YOUR_DISCORD_ID');

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.sin(Date.now() / 1000) * 10,
        y: Math.cos(Date.now() / 1000) * 5
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-8 font-sans">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Team Name</h1>
        <h2 className="text-2xl text-gray-600 mb-6">Draft photographer</h2>

        <div className="flex flex-wrap gap-4 mb-8">
          {['FABRIC', 'JAMES', 'NARRATED', 'PADRON', 'LONDON'].map((name) => (
            <span key={name} className="text-lg px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
              {name}
            </span>
          ))}
        </div>

        {user && (
          <div className="flex items-center gap-2 mb-6">
            <div className={`w-3 h-3 rounded-full ${
              user.discord_status === 'online' ? 'bg-green-500' :
              user.discord_status === 'idle' ? 'bg-yellow-500' :
              user.discord_status === 'dnd' ? 'bg-red-500' : 'bg-gray-500'
            }`}></div>
            <span className="text-sm text-gray-600">
              {user.discord_user.username}#{user.discord_user.discriminator}
            </span>
            {user.activities.find(a => a.type === 0) && (
              <span className="text-sm text-gray-500">
                • Playing {user.activities.find(a => a.type === 0)?.name}
              </span>
            )}
          </div>
        )}
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">Introduction</h2>
        <p className="text-gray-700">Team intro goes here.</p>
      </section>

      <div className="relative">
        <div className="absolute -right-20 -top-20 z-10" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
            <path d="M17 15V7H19V15H17Z" fill="currentColor" className="text-gray-400" />
            <path d="M13 15V3H15V15H13Z" fill="currentColor" className="text-gray-500" />
            <path d="M9 15V5H11V15H9Z" fill="currentColor" className="text-gray-600" />
            <path d="M5 15V9H7V15H5Z" fill="currentColor" className="text-gray-700" />
            <path d="M21 15H3V17H21V15Z" fill="currentColor" className="text-gray-800" />
          </svg>
        </div>

        <section className="mb-8 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Mission</h2>
          <p className="text-gray-700">Team mission description.</p>
        </section>

        <section className="p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Vision</h2>
          <p className="text-gray-700">Team vision description.</p>
        </section>
      </div>
    </div>
  );
}
