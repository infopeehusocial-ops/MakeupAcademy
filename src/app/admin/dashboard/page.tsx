"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  course: string;
  message: string | null;
  status: 'NEW' | 'CONTACTED' | 'CONVERTED' | 'CLOSED';
  createdAt: string;
}

const statusColors = {
  NEW: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  CONTACTED: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  CONVERTED: 'bg-green-500/20 text-green-400 border-green-500/30',
  CLOSED: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
      return;
    }
    fetchLeads();
  }, [router]);

  const fetchLeads = async () => {
    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch('/api/leads', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      } else if (res.status === 401) {
        localStorage.removeItem('adminToken');
        router.push('/admin');
      }
    } catch (err) {
      console.error('Failed to fetch leads:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        fetchLeads();
      }
    } catch (err) {
      console.error('Failed to update lead:', err);
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        fetchLeads();
      }
    } catch (err) {
      console.error('Failed to delete lead:', err);
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin');
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      lead.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'ALL' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-primary animate-pulse tracking-[0.5em] uppercase text-xs">Initializing Session...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">Lead Control</h1>
            <p className="font-body text-white/40 text-sm uppercase tracking-widest">Managing the future of Peehu Deka Academy</p>
          </div>
          <button 
            onClick={logout}
            className="px-8 py-3 border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            Terminal Session
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
           <div className="bg-[#141414] p-6 border border-white/5 luxury-card">
              <h3 className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Total Leads</h3>
              <p className="text-4xl font-bold gold-shimmer">{leads.length}</p>
           </div>
           <div className="bg-[#141414] p-6 border border-white/5 luxury-card">
              <h3 className="text-white/30 text-[10px] uppercase tracking-widest mb-2">New</h3>
              <p className="text-4xl font-bold text-blue-400">{leads.filter(l => l.status === 'NEW').length}</p>
           </div>
           <div className="bg-[#141414] p-6 border border-white/5 luxury-card">
              <h3 className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Converted</h3>
              <p className="text-4xl font-bold text-green-400">{leads.filter(l => l.status === 'CONVERTED').length}</p>
           </div>
           <div className="bg-[#141414] p-6 border border-white/5 luxury-card">
              <h3 className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Closure Rate</h3>
              <p className="text-4xl font-bold text-white/80">{leads.length ? Math.round((leads.filter(l => l.status === 'CONVERTED').length / leads.length) * 100) : 0}%</p>
           </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-10 items-end">
          <div className="flex-1 w-full space-y-2">
            <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">Search Records</label>
            <input 
              type="text" 
              placeholder="Name or Phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#141414] border border-white/5 focus:border-primary/50 p-4 text-sm outline-none transition-all placeholder:text-white/10"
            />
          </div>
          <div className="w-full md:w-64 space-y-2">
            <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">Filter Status</label>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-[#141414] border border-white/5 focus:border-primary/50 p-4 text-sm outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="ALL">ALL RECORDS</option>
              <option value="NEW">NEW</option>
              <option value="CONTACTED">CONTACTED</option>
              <option value="CONVERTED">CONVERTED</option>
              <option value="CLOSED">CLOSED</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#141414] border border-white/5 rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5 bg-white/2 text-[9px] uppercase tracking-[0.3em] text-white/30">
                  <th className="px-8 py-6 font-bold">Inquirer</th>
                  <th className="px-8 py-6 font-bold">Contact</th>
                  <th className="px-8 py-6 font-bold">Interest</th>
                  <th className="px-8 py-6 font-bold">Status</th>
                  <th className="px-8 py-6 font-bold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="px-8 py-6">
                      <p className="font-bold text-white tracking-widest uppercase text-xs mb-1">{lead.name}</p>
                      <p className="text-[10px] text-white/20">{new Date(lead.createdAt).toLocaleDateString()}</p>
                    </td>
                    <td className="px-8 py-6">
                      <div className="space-y-1">
                        <a href={`tel:${lead.phone}`} className="block text-xs text-white/60 hover:text-primary transition-colors">{lead.phone}</a>
                        <a href={`https://wa.me/91${lead.phone.replace(/\D/g, '')}`} target="_blank" className="inline-flex items-center gap-2 text-[9px] text-[#25D366] font-bold uppercase tracking-widest hover:underline">
                          WhatsApp
                        </a>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{lead.course}</p>
                      {lead.message && <p className="text-[10px] text-white/30 mt-1 line-clamp-1 italic max-w-xs">{lead.message}</p>}
                    </td>
                    <td className="px-8 py-6">
                      <select 
                        value={lead.status}
                        onChange={(e) => updateStatus(lead.id, e.target.value)}
                        className={`text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 border rounded-full outline-none cursor-pointer transition-all ${statusColors[lead.status]}`}
                      >
                        <option value="NEW">NEW</option>
                        <option value="CONTACTED">CONTACTED</option>
                        <option value="CONVERTED">CONVERTED</option>
                        <option value="CLOSED">CLOSED</option>
                      </select>
                    </td>
                    <td className="px-8 py-6">
                      <button 
                        onClick={() => deleteLead(lead.id)}
                        className="text-white/20 hover:text-red-500 transition-colors p-2"
                      >
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredLeads.length === 0 && (
              <div className="py-20 text-center text-white/20 uppercase tracking-[0.4em] text-xs">No records found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
