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

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is running!");

    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    if (tabs.length === 0 || contents.length === 0) {
        console.error("No tabs or contents found.");
        return;
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            console.log(`Tab clicked: ${tab.dataset.tab}`);

            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            // Activate clicked tab and its content
            tab.classList.add("active");
            const activeContent = document.getElementById(tab.dataset.tab);
            if (activeContent) {
                activeContent.classList.add("active");
            } else {
                console.error(`No content found for tab: ${tab.dataset.tab}`);
            }
        });
    });

    // Auto-activate tab from URL
    const params = new URLSearchParams(window.location.search);
    const activeTab = params.get("tab");
    if (activeTab) {
        const tabButton = document.querySelector(`[data-tab="${activeTab}"]`);
        if (tabButton) {
            tabButton.click();
        } else {
            console.error(`No tab found with data-tab="${activeTab}"`);
        }
    }
});



window.addEventListener('click', function (event) {
    if (event.target.classList.contains("modal")) {
        closePdfModalCap();
        closePhotoModal();
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

document.querySelectorAll('.file-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.file-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.folder-content').forEach(content => content.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-folder')).classList.add('active');
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


function openPdfModalCap(pdfSrc, captionText, captionLink) {
    document.getElementById("pdf-viewer-cap").src = pdfSrc;
    
    const caption = document.getElementById("pdf-caption-cap");
    if (captionLink) {
        caption.innerHTML = `${captionText} - <a href="${captionLink}" target="_blank" style="color: #724b48; text-decoration: underline;">Click here</a>`;
    } else {
        caption.textContent = captionText;
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


