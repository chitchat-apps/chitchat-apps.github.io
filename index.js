const downloadEl = document.querySelector("#download-button");

const setTheme = () => {
  const featuresWrapper = document.querySelector("#features-wrapper");
  const input = document.querySelector("#feature-switch-input");
  if (input && featuresWrapper) {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    input.checked = isDark;
    featuresWrapper.dataset.theme = isDark ? "dark" : "light";
  }
};

const getDownloadUrl = (os) => {
  return "/#downloads";
  // const baseUrl =
  //   "https://github.com/chitchat-apps/chitchat/releases/latest/download/";
  // return os !== "Windows"
  //   ? "/#downloads"
  //   : baseUrl + "ChitChat-Setup-Windows.msi";
};

const setOs = () => {
  let os = "Windows";
  /mac/i.test(navigator.userAgent) && (os = "Mac");
  /linux/i.test(navigator.userAgent) && (os = "Linux");

  downloadEl.textContent = "Download ChitChat for " + os;
  downloadEl.setAttribute("href", getDownloadUrl(os));
};

setOs();
setTheme();
