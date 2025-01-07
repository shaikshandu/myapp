// Skills data
const skills = [
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "NodeJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

// Get the button and the skills container
const skillsButton = document.getElementById("skills");
const skillsContainer = document.getElementById("skills-container");

// Add a click event listener to the "Skills" button
skillsButton.addEventListener("click", () => {
  // Toggle the visibility of the skills container
  if (skillsContainer.style.display === "none" || skillsContainer.style.display === "") {
      skillsContainer.style.display = "flex"; // Show the container

      // Add the skills dynamically (only if they haven't been added already)
      if (skillsContainer.innerHTML === "") {
          skills.forEach(skill => {
              const skillCard = document.createElement("div");
              skillCard.classList.add("skill-card");

              const img = document.createElement("img");
              img.src = skill.logo;
              img.alt = `${skill.name} Logo`;

              const name = document.createElement("p");
              name.textContent = skill.name;

              skillCard.appendChild(img);
              skillCard.appendChild(name);
              skillsContainer.appendChild(skillCard);
          });
      }
  } else {
      skillsContainer.style.display = "none"; // Hide the container
  }
});

