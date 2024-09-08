// script.ts
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
    const skillsSection = document.getElementById("skills");

    toggleButton.addEventListener("click", () => {
        if (skillsSection) {
            skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
        }
    });
});
