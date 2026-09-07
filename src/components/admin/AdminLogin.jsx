import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/api";
import "./AdminLogin.css";

function AdminLogin({ onLoginSuccess }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(event) {
        event.preventDefault();

        try {
            setLoading(true);
            setMessage("");

            const data = await loginUser(email, password);

            console.log("Login response:", data);

            setMessage("Login successful!");

            if (onLoginSuccess) {
                onLoginSuccess(data);
            }

            navigate("/admin/dashboard");
        } catch (error) {
            console.error("Login error:", error);
            setMessage(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="admin-login">
            <div className="admin-login__card">
                <div className="admin-login__header">
                    <p className="admin-login__eyebrow">
                        NORTHPEAK ROOFING
                    </p>

                    <h1>Admin Login</h1>

                    <p>
                        Sign in to manage your roofing leads.
                    </p>
                </div>

                <form
                    className="admin-login__form"
                    onSubmit={handleLogin}
                >
                    <div className="admin-login__field">
                        <label htmlFor="admin-email">
                            Email
                        </label>

                        <input
                            id="admin-email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="admin-login__field">
                        <label htmlFor="admin-password">
                            Password
                        </label>

                        <input
                            id="admin-password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>

                    {message && (
                        <p className="admin-login__message">
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default AdminLogin;
