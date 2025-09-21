// Focus main content when skip link is activated
document.querySelector(".skip-link").addEventListener("click", function (e) {
  document.getElementById("main-content").focus();
});

// Example: Trap focus in modal (if you have modals)
function trapFocus(modal) {
  const focusableEls = modal.querySelectorAll(
    'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  const firstEl = focusableEls[0];
  const lastEl = focusableEls[focusableEls.length - 1];

  modal.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          lastEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastEl) {
          firstEl.focus();
          e.preventDefault();
        }
      }
    }
  });
}
