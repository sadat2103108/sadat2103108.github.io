import React from 'react'
import { useEffect, useState } from "react";


// Codeforces rank colors
const getRankColor = (rating) => {
  if (rating < 1200) return "#808080"; // Newbie
  if (rating < 1400) return "#00ec18ff"; // Pupil
  if (rating < 1600) return "#00feedff"; // Specialist
  if (rating < 1900) return "#0d00ffff"; // Expert
  if (rating < 2100) return "#AA00AA"; // Candidate Master
  if (rating < 2300) return "#FF8C00"; // Master
  if (rating < 2400) return "#FF8C00"; // International Master
  if (rating < 2600) return "#FF0000"; // Grandmaster
  if (rating < 3000) return "#FF0000"; // International Grandmaster
  return "#FF0000"; // Legendary Grandmaster
}

const onSiteContests = [
  { name: "DUET IUPC 2025", result: "73rd Place" },
  { name: "AUST IUPC 2025", result: "45th Place" },
  { name: "KUET IUPC 2025", result: "129th Place" },
  { name: "ICPC Asia Dhaka Regional 2024", result: "106th Place" },
  { name: "জ্ঞানjam 2024: Intra RUET Programming Contest", result: "5th Place" },
  { name: "CodeSmash 2022: Intra RUET Fresher's Programming Contest", result: "7th Place (individual)" },
];


const CPSection = () => {

  const [cfSummary, setCfSummary] = useState(null);

  useEffect(() => {
    const handle = "sadat";

    // Fetch user info for rating, max rating, rank, etc.
    fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
      .then((res) => res.json())
      .then((infoData) => {
        if (infoData.status === "OK") {
          const user = infoData.result[0];

          // Fetch user submissions to count problems solved
          fetch(`https://codeforces.com/api/user.status?handle=${handle}`)
            .then((res) => res.json())
            .then((statusData) => {
              if (statusData.status === "OK") {
                const solvedSet = new Set();
                let maxProblemRating = 0;

                statusData.result.forEach((p) => {
                  if (p.verdict === "OK") {
                    solvedSet.add(p.problem.name);
                    if (p.problem.rating) maxProblemRating = Math.max(maxProblemRating, p.problem.rating);
                  }
                });

                // Build summary
                setCfSummary({
                  username: user.handle,
                  rank: user.rank,
                  rating: user.rating,
                  maxRating: user.maxRating,
                  solved: solvedSet.size,
                  maxProblemRating,
                });
              }
            });
        }
      })
      .catch((err) => console.error("CF API Error:", err));
  }, []);



  return (
    <section id="cp" className="section">
      <h2>Competitive Programming Journey</h2>

      <div className="cp-container">

        {/* Timeline / On-Site Contests */}
        <div className="timeline-section">
          <h3>On-Site Contests</h3>
          <div className="timeline">
            {onSiteContests.map((c, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-date">{c.name}</div>
                <div className="timeline-content">{c.result}</div>
              </div>
            ))}
          </div>
        </div>


        {/* Codeforces Summary */}
        <div className="cf-section">
          <h3>Codeforces Summary</h3>
          {cfSummary ? (
            <div className="cf-dashboard">
              {/* Rank */}
              <div
                className="cf-rank-display"
                style={{ color: getRankColor(cfSummary.rating) }}
              >
                {cfSummary.rank}
              </div>

              {/* Username */}
              <div
                className="cf-username-display"
                style={{ color: getRankColor(cfSummary.rating) }}
              >
                {cfSummary.username}
              </div>

              <hr className="cf-divider" />

              {/* Stats */}
              <div className="cf-stat-row">
                <span className="cf-stat-label">Current Rating</span>
                <span
                  className="cf-stat-value"
                  style={{ color: getRankColor(cfSummary.rating) }}
                >
                  {cfSummary.rating}
                </span>
              </div>
              <div className="cf-stat-row">
                <span className="cf-stat-label">Max Rating</span>
                <span
                  className="cf-stat-value"
                  style={{ color: getRankColor(cfSummary.maxRating) }}
                >
                  {cfSummary.maxRating}
                </span>
              </div>
              <div className="cf-stat-row">
                <span className="cf-stat-label">Problems Solved</span>
                <span className="cf-stat-value" style={{ color: "#ccc" }}>
                  {cfSummary.solved}
                </span>
              </div>
            </div>
          ) : (
            <p>Loading summary...</p>
          )}
        </div>


      </div>
    </section>

  )
}

export default CPSection