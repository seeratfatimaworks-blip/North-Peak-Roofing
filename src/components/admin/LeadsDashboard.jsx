import { useEffect, useState } from "react";
import { getLeads, updateLeadStatus } from "../../services/api";
import "./LeadsDashboard.css";
function LeadsDashboard() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [updatingLead, setUpdatingLead] = useState(null);


    const handleStatusChange = async (leadId, status) => {
        const previousLeads = leads;

        // Update UI immediately
        setLeads((currentLeads) =>
            currentLeads.map((lead) =>
                lead._id === leadId
                    ? { ...lead, status }
                    : lead
            )
        );

        try {
            setUpdatingLead(leadId);

            await updateLeadStatus(leadId, status);
        } catch (error) {
            console.error("Failed to update lead status:", error);

            // Revert UI if API request fails
            setLeads(previousLeads);
            setError("Failed to update lead status.");
        } finally {
            setUpdatingLead(null);
        }
    };

    useEffect(() => {
        async function loadLeads() {
            try {
                const data = await getLeads();
                setLeads(data);
            } catch (error) {
                console.error("Failed to update lead status:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        loadLeads();
    }, []);

    if (loading) {
        return (
            <section className="admin-dashboard">
                <div className="admin-dashboard__loading">
                    Loading leads...
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="admin-dashboard">
                <div className="admin-dashboard__error">
                    {error}
                </div>
            </section>
        );
    }

    return (
        <section className="admin-dashboard">
            <div className="admin-dashboard__header">
                <div>
                    <p className="admin-dashboard__eyebrow">
                        ADMIN DASHBOARD
                    </p>

                    <h1>Lead Management</h1>

                    <p className="admin-dashboard__description">
                        Manage and track roofing leads submitted through your website.
                    </p>
                </div>

                <div className="admin-dashboard__count">
                    <span>{leads.length}</span>
                    <small>Total Leads</small>
                </div>
            </div>

            {leads.length === 0 ? (
                <div className="admin-dashboard__empty">
                    <h2>No leads yet</h2>
                    <p>
                        New customer inquiries will appear here when someone
                        submits the lead form.
                    </p>
                </div>
            ) : (
                <div className="admin-leads">
                    {leads.map((lead) => (
                        <article
                            className="admin-lead-card"
                            key={lead._id}
                        >
                            <div className="admin-lead-card__top">
                                <div>
                                    <span className="admin-lead-card__label">
                                        CUSTOMER
                                    </span>

                                    <h2>{lead.name}</h2>
                                </div>

                                <select
                                    className="admin-lead-card__status"
                                    value={lead.status || "new"}
                                    onChange={(event) =>
                                        handleStatusChange(lead._id, event.target.value)
                                    }
                                    disabled={updatingLead === lead._id}
                                >
                                    <option value="new">New</option>
                                    <option value="contacted">Contacted</option>
                                    <option value="scheduled">Scheduled</option>
                                    <option value="won">Won</option>
                                    <option value="lost">Lost</option>
                                </select>
                            </div>

                            <div className="admin-lead-card__details">
                                <div>
                                    <span>Phone</span>
                                    <p>{lead.phone}</p>
                                </div>

                                <div>
                                    <span>Email</span>
                                    <p>{lead.email}</p>
                                </div>

                                <div>
                                    <span>Address</span>
                                    <p>{lead.address}</p>
                                </div>

                                <div>
                                    <span>Service</span>
                                    <p>{lead.service}</p>
                                </div>
                            </div>

                            <div className="admin-lead-card__message">
                                <span>Customer Message</span>
                                <p>{lead.message}</p>
                            </div>

                            <div className="admin-lead-card__footer">
                                <span>
                                    Submitted{" "}
                                    {lead.createdAt
                                        ? new Date(
                                            lead.createdAt
                                        ).toLocaleDateString()
                                        : ""}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default LeadsDashboard;