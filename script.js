// Get references to buttons and lists
const addProjectBtn = document.getElementById('add-project-btn');
const addSkillBtn = document.getElementById('add-skill-btn');
const projectsList = document.getElementById('projects-list');
const skillsList = document.getElementById('skills-list');

// Function to add a project
addProjectBtn.addEventListener('click', () => {
    const projectName = prompt('Enter Project Name:');
    if (projectName) {
        const listItem = document.createElement('li');
        listItem.textContent = projectName;
        projectsList.appendChild(listItem);
    }
});

// Function to add a skill
addSkillBtn.addEventListener('click', () => {
    const skillName = prompt('Enter Skill Name:');
    if (skillName) {
        const listItem = document.createElement('li');
        listItem.textContent = skillName;
        skillsList.appendChild(listItem);
    }
});
