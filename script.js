document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".navbar-links");

  if (navToggle && navLinks) {
      navToggle.addEventListener("click", () => {
          const isOpen = navLinks.classList.toggle("nav-open");
          navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      navLinks.querySelectorAll("a").forEach(link => {
          link.addEventListener("click", () => {
              navLinks.classList.remove("nav-open");
              navToggle.setAttribute("aria-expanded", "false");
          });
      });
  }
});
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



