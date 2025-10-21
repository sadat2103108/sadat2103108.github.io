const greetings = [
    "Welcome to my portfolio!",
    "I love solving problems on Codeforces.",
    "Passionate about C++, Python & MERN.",
    "Competitive programmer & ICPC regionalist.",
    "Exploring DSA and full-stack development."
];

let i = 0;
const greetingElement = document.getElementById("greeting");

function changeGreeting() {
    greetingElement.textContent = greetings[i];
    i = (i + 1) % greetings.length;
}

setInterval(changeGreeting, 3000);
changeGreeting();
