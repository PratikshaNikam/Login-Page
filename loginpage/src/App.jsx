import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setError("");
      setIsSubmitted(true);
    } else {
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  };

  return (
    <>
      
      <h1>login Page</h1>
      {
        isSubmitted ? (
          <div>
            <p>Welcome, {username}!</p>
          </div>
        ) : (
            <form onSubmit={handleSubmit}>
              {error && <p className="error">{ error}</p>}
              <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}
                placeholder="username"/>
              </div>

              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="password"/>
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
        )

      }
    </>
  )
}

export default App
