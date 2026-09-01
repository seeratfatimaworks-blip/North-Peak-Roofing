const API_URL = "http://localhost:5000";

export async function checkBackend() {
    console.log("Trying to connect to:", API_URL);

    const response = await fetch(`${API_URL}/`);

    console.log("Backend HTTP status:", response.status);

    if (!response.ok) {
        throw new Error(`Backend returned ${response.status}`);
    }

    const data = await response.text();

    console.log("Backend data:", data);

    return data;
}