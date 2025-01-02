function toggleDropdown(sectionId) {
    const content = document.getElementById(sectionId);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

document.querySelectorAll(".experience-header").forEach(header => {
    header.addEventListener("click", () => {
        const card = header.parentElement;
        card.classList.toggle("open");
    });
});
const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');

    if (tabParam) {
        const tabButton = document.querySelector(`.tab-button[data-tab="${tabParam}"]`);
        const tabContent = document.querySelector(`#${tabParam}`);

        if (tabButton && tabContent) {
            document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            tabButton.classList.add('active');
            tabContent.classList.add('active');
        }
    }
});

