import { useState, useEffect } from 'react'

export default function App() {
  const [apiStatus, setApiStatus] = useState('checking...')

  useEffect(() => {
    // Check if backend API is connected
    fetch('http://127.0.0.1:8000/api/health')
      .then(response => response.json())
      .then(data => {
        setApiStatus('✅ API Connected')
      })
      .catch(error => {
        setApiStatus('❌ API Disconnected')
        console.error('API Error:', error)
      })
  }, [])

  return (
    <div className="min-h-screen text-white">
      <header className="relative isolate overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
          alt="cinema"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                MovieRecs
              </h2>
              <div className="text-sm font-medium bg-black/20 px-3 py-1 rounded-full">
                {apiStatus}
              </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Personalized movie and TV recommendations powered by AI, TMDb, Spotify, and YouTube.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <input
                type="text"
                placeholder="Search movies, shows, genres..."
                className="w-full max-w-md rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="rounded-lg bg-primary-600 px-5 py-3 font-semibold shadow hover:bg-primary-700">
                Explore
              </button>
            </div>
            <div className="mt-6 text-sm text-white/80">
              Try: Action, Comedy, Thriller, Romance
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
