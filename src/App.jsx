import { useState, useMemo } from "react";
import { Eye, EyeClosed } from "lucide-react";

const App = () => {
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const strengthInfo = useMemo(() => {
    if (!password) return { score: 0, label: "", color: "#cbd5e1" };

    const checks = {
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    };

    const score = Object.values(checks).filter(Boolean).length;

    let label = "Weak";
    let color = "#ff0054";

    if (score === 5) {
      label = "Strong";
      color = "#3fbb60";
    } else if (score >= 3) {
      label = "Medium";
      color = "#fe804d";
    }

    return { score, label, color };
  }, [password]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1 className="title">Password Strength Checker</h1>
        </div>

        <div className="card-body">
          <div className="input-container">
            <div className="input-box">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={hidePassword ? "password" : "text"}
                className="input"
                placeholder="Enter Password"
                aria-label="Password"
              />

              <button
                type="button"
                className="toggle-btn"
                onClick={() => setHidePassword(!hidePassword)}
                aria-label={hidePassword ? "Show password" : "Hide password"}
              >
                {hidePassword ? (
                  <EyeClosed color="#94a3b8" size={20} />
                ) : (
                  <Eye color="#2563eb" size={20} />
                )}
              </button>
            </div>

            <div className="progress-bg">
              <div
                className="progress"
                style={{
                  width: `${(strengthInfo.score / 5) * 100}%`,
                  backgroundColor: strengthInfo.color,
                }}
              ></div>
            </div>
          </div>
          {password && (
            <p
              className="message"
              style={{ color: strengthInfo.color }}
              aria-live="polite"
            >
              Strength: <strong>{strengthInfo.label}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
