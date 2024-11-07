var profilePic = document.getElementById("profile-pic");
var inputFile = document.getElementById("profile-upload");
var addEducationButton = document.getElementById("add-education");
var addSkillButton = document.getElementById("add-skill");
var addExperienceButton = document.getElementById("add-experience");
inputFile === null || inputFile === void 0 ? void 0 : inputFile.addEventListener("change", function (event) {
    var target = event.target;
    var file = target.files ? target.files[0] : null;
    if (file) {
        profilePic.src = URL.createObjectURL(file);
    }
});
// Add Education 
addEducationButton.addEventListener("click", function () {
    var educationSection = document.getElementById("education-section");
    var div = document.createElement("div");
    div.className = "education-entry";
    div.innerHTML = "\n    <input type=\"text\" placeholder=\"Institution\" />\n    <input type=\"text\" placeholder=\"Degree\" />\n    <input type=\"number\" placeholder=\"Year\" />\n  ";
    educationSection.appendChild(div);
});
// Add Skill
addSkillButton.addEventListener("click", function () {
    var skillInput = document.getElementById("skill-input");
    var skillValue = skillInput.value.trim();
    if (skillValue) {
        var skillsSection = document.getElementById("skills-section");
        var skillElement = document.createElement("p");
        skillElement.textContent = skillValue;
        skillsSection.appendChild(skillElement);
        skillInput.value = "";
    }
});
// Add Experience
addExperienceButton.addEventListener("click", function () {
    var experienceSection = document.getElementById("experience-section");
    var div = document.createElement("div");
    div.className = "experience-entry";
    div.innerHTML = "\n    <input type=\"text\" placeholder=\"Job Title\" />\n    <input type=\"text\" placeholder=\"Company\" />\n    <input type=\"number\" placeholder=\"Year\" />\n  ";
    experienceSection.appendChild(div);
});
