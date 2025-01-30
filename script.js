// Tabs
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            console.log(`Tab clicked: ${tab.dataset.tab}`);
            contents.forEach(content => content.classList.remove("active"));

            const activeContent = document.getElementById(tab.dataset.tab);
            if (activeContent) {
                activeContent.classList.add("active");
            } else {
                console.error(`No content found for tab: ${tab.dataset.tab}`);
            }
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
        });
    });

    const params = new URLSearchParams(window.location.search);
    const activeTab = params.get("tab");
    if (activeTab) {
        const tabButton = document.querySelector(`[data-tab="${activeTab}"]`);
        if (tabButton) {
            tabButton.click();
        } else {
            console.warn(`No tab found for: ${activeTab}`);
        }
    }

    const fileTabs = document.querySelectorAll('.file-tab');
    const fileContents = document.querySelectorAll('.folder-content');

    fileTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            fileTabs.forEach(t => t.classList.remove('active'));
            fileContents.forEach(content => content.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-folder')).classList.add('active');
        });
    });
});



// Modals
window.addEventListener('click', function (event) {
    if (event.target.classList.contains("modal")) {
        console.log("Outside click detected, closing modals...");
        closeModal();
        closePdfModalCap();
        closePhotoModal();
        closeTextModal();
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
    console.log("Closing all modals...");
    document.querySelectorAll(".modal").forEach(modal => {
        modal.style.display = "none";
    });

    
    document.getElementById("pdf-viewer").src = "";
    document.getElementById("pdf-viewer-cap").src = "";
}


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


function openPhotoModal(photoSrc, captionText) {
    document.getElementById("photo-viewer").src = photoSrc;
    document.getElementById("photo-caption").textContent = captionText;
    document.getElementById("photo-modal").style.display = "flex";
}


function closePhotoModal() {
    document.getElementById("photo-modal").style.display = "none";
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


function closePdfModalCap() {
    document.getElementById("pdf-modal-cap").style.display = "none";
}


document.getElementById("photo-modal").addEventListener("click", function (event) {
    if (event.target === this) {
        closePhotoModal();
    }
});

document.getElementById("pdf-modal-cap").addEventListener("click", function (event) {
    if (event.target === this) {
        closePdfModalCap();
    }
});

document.getElementById("pdf-modal").addEventListener("click", function (event) {
    if (event.target === this) {
        closeModal();
    }
});

document.getElementById("text-modal").addEventListener("click", function (event) {
    if (event.target === this) {
        closeTextModal();
    }
});


