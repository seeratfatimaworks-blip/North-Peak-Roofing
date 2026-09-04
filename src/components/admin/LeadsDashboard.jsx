import { useEffect, useState } from "react";
import { getLeads } from "../../services/api";

function LeadsDashboard() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadLeads() {
            try {
                const data = await getLeads();
                setLeads(data);
            } catch (error) {
                console.error("Failed to load leads:", error);
                setError("Failed to load leads.");
            } finally {
                setLoading(false);
            }
        }

        loadLeads();
    }, []);

    if (loading) {
        return <p>Loading leads...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (leads.length === 0) {
        return <p>No leads found.</p>;
    }

    return (
        <section>
            <h1>Leads</h1>

            {leads.map((lead) => (
                <article key={lead._id}>
                    <h2>{lead.name}</h2>

                    <p>
                        <strong>Phone:</strong> {lead.phone}
                    </p>

                    <p>
                        <strong>Email:</strong> {lead.email}
                    </p>

                    <p>
                        <strong>Address:</strong> {lead.address}
                    </p>

                    <p>
                        <strong>Service:</strong> {lead.service}
                    </p>

                    <p>
                        <strong>Message:</strong> {lead.message}
                    </p>

                    <hr />
                </article>
            ))}
        </section>
    );
}

export default LeadsDashboard;