document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const originalLabel = button.textContent;

    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = button.dataset.copySuccess;
    } catch (_error) {
      button.textContent = button.dataset.copyError;
    }

    window.setTimeout(() => {
      button.textContent = originalLabel;
    }, 1800);
  });
});
