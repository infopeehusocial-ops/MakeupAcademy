"use client";
import { useEffect, useState } from 'react';

export default function Admin() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/leads')
      .then(res => res.json())
      .then(data => {
        setLeads(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title gold-text text-left mb-8">Lead Management</h1>
        
        {loading ? (
          <p>Loading leads...</p>
        ) : leads.length === 0 ? (
          <div className="card text-center">
            <p className="text-gray-500">No inquiries received yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #333' }}>
                  <th className="p-4 text-xs uppercase text-gray-500">Date</th>
                  <th className="p-4 text-xs uppercase text-gray-500">Name</th>
                  <th className="p-4 text-xs uppercase text-gray-500">Phone</th>
                  <th className="p-4 text-xs uppercase text-gray-500">Course</th>
                  <th className="p-4 text-xs uppercase text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead: any) => (
                  <tr key={lead.id} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td className="p-4 text-sm">{new Date(lead.timestamp).toLocaleDateString()}</td>
                    <td className="p-4 font-bold">{lead.name}</td>
                    <td className="p-4">{lead.phone}</td>
                    <td className="p-4">{lead.course}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-gold text-xs font-bold rounded" style={{ background: 'var(--gold-start)', color: '#000' }}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
