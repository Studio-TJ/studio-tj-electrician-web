const languagePicker = document.querySelector(".language-picker");

function closeLanguagePickerOutside(event) {
  if (languagePicker.open && !languagePicker.contains(event.target)) {
    languagePicker.open = false;
  }
}

document.addEventListener("click", closeLanguagePickerOutside);
document.addEventListener("focusin", closeLanguagePickerOutside);

languagePicker.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && languagePicker.open) {
    event.preventDefault();
    languagePicker.open = false;
    languagePicker.querySelector("summary").focus();
  }
});
