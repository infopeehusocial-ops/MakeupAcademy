"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('adminToken', data.token);
        router.push('/admin/dashboard');
      } else {
        setError(data.details || data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#141414] border border-white/5 p-10 luxury-card rounded-sm">
        <div className="text-center mb-10">
          <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-4 block">Secure Portal</span>
          <h1 className="font-headline text-3xl font-bold uppercase tracking-tight text-white">Admin Login</h1>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-xs text-center uppercase tracking-widest font-bold">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Email Address</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-white/10 focus:border-primary px-0 py-4 text-xl outline-none transition-all placeholder:text-white/5" 
              placeholder="admin@academy.com" 
            />
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Password</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-white/10 focus:border-primary px-0 py-4 text-xl outline-none transition-all placeholder:text-white/5" 
              placeholder="••••••••" 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary text-black py-5 text-[10px] font-bold uppercase tracking-[0.2em] gold-button-glow pulse-ring transition-all disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Access Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}
