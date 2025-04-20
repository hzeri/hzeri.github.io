// === Header === //
function toggleMenu() {
  const navLinks = document.querySelector('.navbar-links');
  navLinks.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");
  
    // ===== Tabs =====
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", function () {
        contents.forEach(content => content.classList.remove("active"));
        const activeContent = document.getElementById(tab.dataset.tab);
        if (activeContent) activeContent.classList.add("active");
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
      });
    });
  
    const params = new URLSearchParams(window.location.search);
    const activeTab = params.get("tab");
    if (activeTab) {
      const tabButton = document.querySelector(`[data-tab="${activeTab}"]`);
      if (tabButton) tabButton.click();
    }
  
    // ===== File Tabs =====
    const fileTabs = document.querySelectorAll(".file-tab");
    const fileContents = document.querySelectorAll(".folder-content");
    fileTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        fileTabs.forEach(t => t.classList.remove("active"));
        fileContents.forEach(content => content.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById(tab.getAttribute("data-folder")).classList.add("active");
      });
    });
  
    // ===== Skills Filtering + View More/Less =====
    const buttons = document.querySelectorAll(".filter-btn");
    const skillCards = document.querySelectorAll(".skill-card");
    const toggleBtn = document.getElementById("toggle-skills-btn");
    const cardsToShow = 6;
    let currentFilter = "all";
    let isExpanded = false;
  
    function applyFilter() {
      skillCards.forEach(card => {
        const categories = card.dataset.category
          .split(",")
          .map(cat => cat.trim().toLowerCase());
  
        const matches = currentFilter === "all" || categories.includes(currentFilter);
        card.style.display = matches ? "flex" : "none";
        card.classList.remove("hidden");
      });
    }
  
    function updateSkillVisibility() {
        skillCards.forEach(card => card.classList.remove("hidden"));
      
        const visibleCards = Array.from(skillCards).filter(card => card.style.display !== "none");
      
        visibleCards.forEach((card, index) => {
          if (!isExpanded && index >= cardsToShow) {
            card.classList.add("hidden");
          } else {
            card.classList.remove("hidden");
          }
        });
      
        if (toggleBtn) {
          toggleBtn.textContent = isExpanded ? "View Less Skills" : "View More Skills";
          toggleBtn.style.display = visibleCards.length > cardsToShow ? "inline-block" : "none";
        }
      }
      
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        currentFilter = button.dataset.filter.toLowerCase();
        isExpanded = false;
        applyFilter();
        updateSkillVisibility();
      });
    });
  
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function (e) {
        e.preventDefault();
        isExpanded = !isExpanded;
        updateSkillVisibility();
      });
    }
  
    // Initial state
    applyFilter();
    updateSkillVisibility();
  
    // ===== Modals =====
    window.addEventListener("click", function (event) {
      if (event.target.classList.contains("modal")) {
        closeModal();
        closePdfModalCap();
        closePhotoModal();
        closeTextModal();
      }
    });
  
    function openModal(pdfUrl) {
      const modal = document.getElementById("pdf-modal");
      const viewer = document.getElementById("pdf-viewer");
      viewer.src = pdfUrl;
      modal.style.display = "flex";
    }
  
    function closeModal() {
      document.querySelectorAll(".modal").forEach(modal => {
        modal.style.display = "none";
      });
      document.getElementById("pdf-viewer").src = "";
      document.getElementById("pdf-viewer-cap").src = "";
    }
  
    function openTextModal(abstractText) {
      const modal = document.getElementById("text-modal");
      const content = document.getElementById("abstract-content");
      content.textContent = abstractText;
      modal.style.display = "flex";
    }
  
    function closeTextModal() {
      const modal = document.getElementById("text-modal");
      modal.style.display = "none";
      document.getElementById("abstract-content").textContent = "";
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
      if (event.target === this) closePhotoModal();
    });
  
    document.getElementById("pdf-modal-cap").addEventListener("click", function (event) {
      if (event.target === this) closePdfModalCap();
    });
  
    document.getElementById("pdf-modal").addEventListener("click", function (event) {
      if (event.target === this) closeModal();
    });
  
    document.getElementById("text-modal").addEventListener("click", function (event) {
      if (event.target === this) closeTextModal();
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



