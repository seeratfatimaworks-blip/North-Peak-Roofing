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
        <main className="admin-login">
            <div className="admin-login__shell">

                <div className="admin-login__brand">
                    <a href="/" className="admin-login__logo">
                        NORTHPEAK
                    </a>

                    <span className="admin-login__brand-subtitle">
                        ROOFING
                    </span>
                </div>

                <div className="admin-login__card">

                    <div className="admin-login__header">
                        <p className="admin-login__eyebrow">
                            ADMIN PORTAL
                        </p>

                        <h1>Welcome back.</h1>

                        <p>
                            Sign in to manage your roofing leads
                            and inquiries.
                        </p>
                    </div>

                    <form
                        className="admin-login__form"
                        onSubmit={handleLogin}
                    >
                        <div className="admin-login__field">
                            <label htmlFor="admin-email">
                                Email address
                            </label>

                            <input
                                id="admin-email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                required
                                autoComplete="email"
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
                                autoComplete="current-password"
                            />
                        </div>

                        <button
                            className="admin-login__button"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </button>

                        {message && (
                            <p
                                className={`admin-login__message ${message === "Login successful!"
                                        ? "admin-login__message--success"
                                        : "admin-login__message--error"
                                    }`}
                            >
                                {message}
                            </p>
                        )}
                    </form>

                    <a
                        href="/"
                        className="admin-login__back"
                    >
                        ← Back to NorthPeak Roofing
                    </a>

                </div>
            </div>
        </main>
    );
}

export default AdminLogin;
