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
    console.log("PDF Modal triggered with URL: " + pdfUrl);
    const modal = document.getElementById('pdf-modal');
    const viewer = document.getElementById('pdf-viewer');
    viewer.src = pdfUrl;
    modal.style.display = 'flex';
}

function closeModal() {
    console.log("Modal closed.");
    const modal = document.getElementById('pdf-modal');
    const viewer = document.getElementById('pdf-viewer');
    modal.style.display = 'none';
    viewer.src = '';
}

window.addEventListener('click', function (event) {
    const modal = document.getElementById('pdf-modal');
    const modalContent = document.querySelector('.modal-content');

    // Check if the clicked area is the modal but not its content
    if (event.target === modal && !modalContent.contains(event.target)) {
        closeModal();
    }
});

function openTextModal(abstractText) {
    const modal = document.getElementById('text-modal');
    const content = document.getElementById('abstract-content');
    content.textContent = abstractText; 
    modal.style.display = 'flex'; 
}

function closeTextModal() {
    const modal = document.getElementById('text-modal');
    modal.style.display = 'none'; 
    document.getElementById('abstract-content').textContent = ''; 
}

window.addEventListener('click', function (event) {
    const modal = document.getElementById('text-modal');
    const modalContent = document.querySelector('.modal-content');
    if (event.target === modal && !modalContent.contains(event.target)) {
        closeTextModal();
    }
});


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

function openPhotoModal(photoSrc, captionText) {
    document.getElementById("photo-viewer").src = photoSrc;
    document.getElementById("photo-caption").textContent = captionText;
    document.getElementById("photo-modal").style.display = "flex";
}

// Function to close modal
function closePhotoModal() {
    document.getElementById("photo-modal").style.display = "none";
}

// Function to close when clicking outside the content box
function outsideClick(event) {
    if (event.target.id === "photo-modal") {
        closePhotoModal();
    }
}

// Open PDF Modal with Caption and Clickable Link
function openPdfModalCap(pdfSrc, captionText, captionLink) {
    document.getElementById("pdf-viewer-cap").src = pdfSrc;

    // Check if a link is provided
    if (captionLink) {
        document.getElementById("pdf-caption-cap").innerHTML = 
            `${captionText} - <a href="${captionLink}" target="_blank" style="color: #724b48; text-decoration: underline;">Click here</a>`;
    } else {
        document.getElementById("pdf-caption-cap").textContent = captionText;
    }

    document.getElementById("pdf-modal-cap").style.display = "flex";
}


// Close PDF Modal with Caption using "X" button
function closePdfModalCap() {
    document.getElementById("pdf-modal-cap").style.display = "none";
}

// Close modal when clicking outside the content
function outsideClick(event) {
    if (event.target.classList.contains("modal")) {
        closePdfModalCap();
        closePhotoModal();
    }
}


