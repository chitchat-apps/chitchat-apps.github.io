const featuresWrapper = document.querySelector("#features-wrapper");
const input = document.querySelector("#feature-switch-input");

if (input && featuresWrapper) {
  input.addEventListener("change", (ev) => {
    featuresWrapper.dataset.theme = ev.target.checked ? "dark" : "light";
  });
}
