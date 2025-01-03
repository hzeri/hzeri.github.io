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

function openModal(pdfUrl) {
    const modal = document.getElementById('modal');
    const viewer = document.getElementById('pdf-viewer');
    viewer.src = pdfUrl;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    const viewer = document.getElementById('pdf-viewer');
    modal.style.display = 'none';
    viewer.src = ''; // Clear the iframe to stop loading the PDF
}

// Close modal when clicking outside the content
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};

function openTextModal(abstractText) {
    const modal = document.getElementById('text-modal');
    const content = document.getElementById('abstract-content');
    content.textContent = abstractText; // Set the abstract text dynamically
    modal.style.display = 'flex'; // Show modal
}

function closeTextModal() {
    const modal = document.getElementById('text-modal');
    modal.style.display = 'none'; // Hide modal
    document.getElementById('abstract-content').textContent = ''; // Clear the content
}

document.querySelectorAll('.file-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs and contents
        document.querySelectorAll('.file-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.folder-content').forEach(content => content.classList.remove('active'));

        // Add 'active' class to clicked tab and corresponding content
        tab.classList.add('active');
        const folderId = tab.getAttribute('data-folder');
        document.getElementById(folderId).classList.add('active');
    });
});


