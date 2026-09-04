const API_URL = "http://localhost:5000";

export async function checkBackend() {
    console.log("Trying to connect to:", API_URL);

    const response = await fetch(`${API_URL}/`);

    console.log("Backend HTTP status:", response.status);

    if (!response.ok) {
        throw new Error(`Backend returned ${response.status}`);
    }

    const data = await response.json();

    console.log("Backend data:", data);

    return data;
}

export async function loginUser(email, password) {
    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }

    localStorage.setItem("token", data.token);

    return data;
}

export const getLeads = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/api/leads`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch leads");
    }

    return data;
};