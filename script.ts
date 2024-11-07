const profilePic = document.getElementById("profile-pic") as HTMLImageElement;
const inputFile = document.getElementById("profile-upload") as HTMLInputElement;
const addEducationButton = document.getElementById("add-education") as HTMLButtonElement;
const addSkillButton = document.getElementById("add-skill") as HTMLButtonElement;
const addExperienceButton = document.getElementById("add-experience") as HTMLButtonElement;

inputFile?.addEventListener("change", (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files ? target.files[0] : null;
  if (file) {
    profilePic.src = URL.createObjectURL(file);
  }
});

// Add Education 
addEducationButton.addEventListener("click", () => {
  const educationSection = document.getElementById("education-section") as HTMLDivElement;
  const div = document.createElement("div");
  div.className = "education-entry";
  div.innerHTML = `
    <input type="text" placeholder="Institution" />
    <input type="text" placeholder="Degree" />
    <input type="number" placeholder="Year" />
  `;
  educationSection.appendChild(div);
});

// Add Skill
addSkillButton.addEventListener("click", () => {
  const skillInput = document.getElementById("skill-input") as HTMLInputElement;
  const skillValue = skillInput.value.trim();
  if (skillValue) {
    const skillsSection = document.getElementById("skills-section") as HTMLDivElement;
    const skillElement = document.createElement("p");
    skillElement.textContent = skillValue;
    skillsSection.appendChild(skillElement);
    skillInput.value = "";
  }
});

// Add Experience
addExperienceButton.addEventListener("click", () => {
  const experienceSection = document.getElementById("experience-section") as HTMLDivElement;
  const div = document.createElement("div");
  div.className = "experience-entry";
  div.innerHTML = `
    <input type="text" placeholder="Job Title" />
    <input type="text" placeholder="Company" />
    <input type="number" placeholder="Year" />
  `;
  experienceSection.appendChild(div);
});
