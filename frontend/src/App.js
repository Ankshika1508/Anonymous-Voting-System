import React, { useState } from "react";
import "./App.css";

function App() {
  const [vote, setVote] = useState("");
  const [message, setMessage] = useState("");

  const handleVoteChange = (e) => {
    setVote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vote === "") {
      setMessage("⚠️ Please select an option to vote.");
    } else {
      setMessage(`✅ You voted for "${vote}". Thanks for voting anonymously!`);
      setVote("");
    }
  };

  return (
    <div className="app-container">
      <h1 className="main-title">🗳️ Anonymous Voting System</h1>
      <form onSubmit={handleSubmit} className="vote-form">
        <label className="vote-label">
          Choose your option:
          <select value={vote} onChange={handleVoteChange} className="vote-select">
            <option value="">--Select--</option>
            <option value="Option A">Option A</option>
            <option value="Option B">Option B</option>
            <option value="Option C">Option C</option>
          </select>
        </label>
        <button type="submit" className="submit-button">Submit Vote</button>
      </form>
      {message && <div className="message-box">{message}</div>}
    </div>
  );
}

export default App;
