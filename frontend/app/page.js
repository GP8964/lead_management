'use client';


import { useEffect, useState } from "react";


export default function Home() {
const [leads, setLeads] = useState([]);
const [form, setForm] = useState({ name: "", email: "", status: "New" });


const fetchLeads = async () => {
const res = await fetch("http://localhost:4000/api/leads");
setLeads(await res.json());
};


useEffect(() => {
fetchLeads();
}, []);


const addLead = async (e) => {
e.preventDefault();
await fetch("http://localhost:4000/api/leads", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(form)
});
setForm({ name: "", email: "", status: "New" });
fetchLeads();
};


return (
<div style={{ padding: 40, fontFamily: 'sans-serif' }}>
<h1>Lead Management App</h1>


<h2>Add Lead</h2>
<form onSubmit={addLead}>
<input
placeholder="Name"
value={form.name}
onChange={(e) => setForm({ ...form, name: e.target.value })}
required
/>
<br /><br />
<input
placeholder="Email"
value={form.email}
onChange={(e) => setForm({ ...form, email: e.target.value })}
required
/>
<br /><br />
<select
value={form.status}
onChange={(e) => setForm({ ...form, status: e.target.value })}
>
<option>New</option>
<option>Engaged</option>
<option>Proposal Sent</option>
<option>Closed-Won</option>
<option>Closed-Lost</option>
</select>
<br /><br />
<button type="submit">Add Lead</button>
</form>


<h2>Leads</h2>
<ul>
{leads.map((lead) => (
<li key={lead._id}>
<strong>{lead.name}</strong> — {lead.email} — {lead.status}
</li>
))}
</ul>
</div>
);
}