// Hero and sections
const sections={
  hero:`
    <div class="hero-left">
      <img src="dp.jpg" alt="Sadat's Profile"/>
    </div>
    <div class="hero-right">
      <h1>Hi, I'm Sadat</h1>
      <p>Competitive Programmer | Algorithm Enthusiast | Web Developer</p>
    </div>
  `,
  about:`
    <div class="about-text">
      <h2>About Me</h2>
      <p>CS student passionate about problem-solving, competitive programming, and building web applications.</p>
      <p>I participate in coding contests regularly and focus on algorithms, data structures, and web development.</p>
    </div>
    <div class="about-img">
      <img src="dp.jpg" alt="Sadat"/>
    </div>
  `,
  skills:`
    <h2>Skills</h2>
    <div class="skill-card"><div class="skill-circle">98</div><p>Competitive Programming</p></div>
    <div class="skill-card"><div class="skill-circle">99</div><p>Algorithms & DS</p></div>
    <div class="skill-card"><div class="skill-circle">95</div><p>C++</p></div>
    <div class="skill-card"><div class="skill-circle">90</div><p>Python</p></div>
    <div class="skill-card"><div class="skill-circle">85</div><p>JavaScript</p></div>
    <div class="skill-card"><div class="skill-circle">80</div><p>React</p></div>
  `,
  projects:`
    <h2>Projects</h2>
    <div class="project-card"><b>Portfolio Website</b> — Modular dynamic portfolio on GitHub Pages.</div>
    <div class="project-card"><b>CP Tracker</b> — Web app to track contests & ratings.</div>
    <div class="project-card"><b>Mini MERN App</b> — CRUD app for personal notes.</div>
  `,
  achievements:`
    <h2>Achievements</h2>
    <ul>
      <li>🏆 Rated coder on Codeforces, LeetCode, AtCoder</li>
      <li>🎯 ICPC-style competitions participant</li>
      <li>📜 Certificates in Algorithms & Web Development</li>
    </ul>
  `,
  contact:`
    <h2>Contact</h2>
    <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
    <p>GitHub: <a href="https://github.com/sadat2103108" target="_blank">github.com/sadat2103108</a></p>
  `
};

// Inject sections
for(const id in sections) document.getElementById(id).innerHTML=sections[id];
