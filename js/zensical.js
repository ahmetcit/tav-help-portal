/* ============================================================
   Zensical — small helper script
   - "I've done this" step checklist with progress bar
   - subtle reveal-on-scroll
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Mobile menu toggle ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.getElementById("site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.textContent = open ? "✕" : "☰";
    });
  }

  /* ---------- Step checklist ---------- */
  var toggles = document.querySelectorAll(".step-toggle");
  var segments = document.querySelectorAll(".progress-seg");
  var doneCountEl = document.getElementById("done-count");
  var isTR = (document.documentElement.lang || "").toLowerCase().indexOf("tr") === 0;

  function updateProgress() {
    var done = document.querySelectorAll(".step-toggle.done").length;
    var total = toggles.length;

    segments.forEach(function (seg, i) {
      seg.classList.toggle("done", i < done);
    });

    if (doneCountEl) {
      doneCountEl.textContent = isTR
        ? (done + " / " + total + " tamamlandı")
        : (done + " of " + total + " complete");
    }
  }

  toggles.forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.classList.toggle("done");
      updateProgress();
    });
  });

  updateProgress();

  /* ---------- Lightbox for gallery images ---------- */
  var lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-label", "Image preview");
  lightbox.innerHTML = '<div class="lb-inner"><img alt=""><p class="caption"></p></div>';
  document.body.appendChild(lightbox);

  var lbImg = lightbox.querySelector("img");
  var lbCap = lightbox.querySelector(".caption");

  lightbox.addEventListener("click", function () {
    lightbox.classList.remove("open");
  });

  document.querySelectorAll(".gallery figure img, .shot img").forEach(function (img) {
    img.addEventListener("click", function () {
      lbImg.src = img.src;
      lbImg.alt = img.alt || "";
      var fig = img.closest("figure");
      var cap = fig ? fig.querySelector("figcaption") : null;
      lbCap.textContent = cap ? cap.textContent : "";
      lightbox.classList.add("open");
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(function (el) { io.observe(el); });
  } else {
    // Older browsers: show everything immediately.
    reveals.forEach(function (el) { el.classList.add("in"); });
  }
})();
