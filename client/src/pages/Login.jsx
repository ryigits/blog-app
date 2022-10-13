import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login(params) {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/auth/login", inputs);
            navigate("/");
        } catch (err) {
            setError(err.response.data);
            console.log(err);
        }
    };
    return (
        <>
            <div className="auth">
                <h1>Login</h1>
                <form>
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                    />
                    <input
                        required
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit}>Login</button>
                    {error && <p>{error}</p>}
                    <span>
                        Don't you have an account?
                        <Link to="/register">Register</Link>
                    </span>
                </form>
            </div>
        </>
    );
}
