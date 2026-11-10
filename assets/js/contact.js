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

const enquiryForm = document.querySelector("#enquiry-form");

if (enquiryForm) {
  const fields = enquiryForm.querySelector("fieldset");
  const status = enquiryForm.querySelector('[role="status"]');

  enquiryForm.querySelector('a[href="#enquiry-privacy"]').addEventListener("click", () => {
    document.getElementById("enquiry-privacy").open = true;
  });

  enquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (fields.disabled) return;

    const payload = Object.fromEntries(new FormData(enquiryForm));
    fields.disabled = true;
    status.textContent = enquiryForm.dataset.pending;

    try {
      const response = await fetch(enquiryForm.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        credentials: "omit",
      });

      if (!response.ok) throw new Error(`Form submission failed (${response.status})`);

      enquiryForm.reset();
      status.textContent = enquiryForm.dataset.success;
    } catch {
      status.textContent = enquiryForm.dataset.error;
    } finally {
      fields.disabled = false;
    }
  });
}
