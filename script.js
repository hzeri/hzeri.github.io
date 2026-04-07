document.addEventListener("DOMContentLoaded", () => {
  const MOBILE_PDF_BREAKPOINT = 768;

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".navbar-links");

  const modals = {
    pdf: document.getElementById("pdf-modal"),
    text: document.getElementById("text-modal"),
    photo: document.getElementById("photo-modal"),
    pdfCap: document.getElementById("pdf-modal-cap"),
  };

  const viewers = {
    pdf: document.getElementById("pdf-viewer"),
    pdfCap: document.getElementById("pdf-viewer-cap"),
    photo: document.getElementById("photo-viewer"),
    abstract: document.getElementById("abstract-content"),
    photoCaption: document.getElementById("photo-caption"),
    pdfCaption: document.getElementById("pdf-caption-cap"),
  };


  function isMobilePdfMode() {
    return window.innerWidth <= MOBILE_PDF_BREAKPOINT;
  }

  function showModal(modal) {
    if (modal) modal.style.display = "flex";
  }

  function hideModal(modal) {
    if (modal) modal.style.display = "none";
  }

  function closeAllModals() {
    Object.values(modals).forEach(hideModal);

    if (viewers.pdf) viewers.pdf.src = "";
    if (viewers.pdfCap) viewers.pdfCap.src = "";
    if (viewers.photo) viewers.photo.src = "";
    if (viewers.abstract) viewers.abstract.textContent = "";
    if (viewers.photoCaption) viewers.photoCaption.textContent = "";
    if (viewers.pdfCaption) viewers.pdfCaption.textContent = "";
  }

  // ---------- Mobile nav ----------
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700 && navLinks && navToggle) {
      navLinks.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // ---------- Modal helpers exposed for inline onclick ----------
  window.openModal = function openModal(pdfUrl) {
    if (isMobilePdfMode()) {
      window.open(pdfUrl, "_blank", "noopener,noreferrer");
      return;
    }

    if (viewers.pdf) viewers.pdf.src = pdfUrl;
    showModal(modals.pdf);
  };

  window.closeModal = function closeModal() {
    hideModal(modals.pdf);
    if (viewers.pdf) viewers.pdf.src = "";
  };

  window.openTextModal = function openTextModal(abstractText) {
    if (viewers.abstract) viewers.abstract.textContent = abstractText;
    showModal(modals.text);
  };

  window.closeTextModal = function closeTextModal() {
    hideModal(modals.text);
    if (viewers.abstract) viewers.abstract.textContent = "";
  };

  window.openPhotoModal = function openPhotoModal(photoSrc, captionText) {
    if (viewers.photo) viewers.photo.src = photoSrc;
    if (viewers.photoCaption) viewers.photoCaption.textContent = captionText;
    showModal(modals.photo);
  };

  window.closePhotoModal = function closePhotoModal() {
    hideModal(modals.photo);
    if (viewers.photo) viewers.photo.src = "";
    if (viewers.photoCaption) viewers.photoCaption.textContent = "";
  };

  window.openPdfModalCap = function openPdfModalCap(pdfSrc, captionText, captionLink) {
    if (isMobilePdfMode()) {
      window.open(pdfSrc, "_blank", "noopener,noreferrer");
      return;
    }

    if (viewers.pdfCap) viewers.pdfCap.src = pdfSrc;

    if (viewers.pdfCaption) {
      if (captionLink) {
        viewers.pdfCaption.innerHTML = `${captionText} - <a href="${captionLink}" target="_blank" rel="noopener noreferrer" style="color: #724b48; text-decoration: underline;">Click here</a>`;
      } else {
        viewers.pdfCaption.textContent = captionText;
      }
    }

    showModal(modals.pdfCap);
  };

  window.closePdfModalCap = function closePdfModalCap() {
    hideModal(modals.pdfCap);
    if (viewers.pdfCap) viewers.pdfCap.src = "";
    if (viewers.pdfCaption) viewers.pdfCaption.textContent = "";
  };

  // ---------- Close modal on backdrop click ----------
  Object.values(modals).forEach((modal) => {
    if (!modal) return;

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeAllModals();
      }
    });
  });

  // ---------- Close modal with Escape ----------
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });
  // ---------- Clean up button URLs  ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;
  
      setTimeout(() => {
        history.replaceState(null, null, window.location.pathname);
      }, 300);
    });
  });
});