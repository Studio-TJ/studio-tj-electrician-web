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

document.querySelectorAll("[data-dialog-open]").forEach((trigger) => {
  const dialog = document.getElementById(trigger.dataset.dialogOpen);

  if (!dialog) return;

  trigger.addEventListener("click", () => {
    dialog.showModal();
  });

  dialog.querySelector("[data-dialog-close]")?.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});
