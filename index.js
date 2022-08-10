const downloadEl = document.querySelector("#download-button");

const getDownloadUrl = (os) => {
  const baseUrl =
    "https://github.com/chitchat-apps/chitchat/releases/download/latest/";
  return os !== "Windows" ? "/#downloads" : baseUrl + "ChitChat.msi";
};

const setOs = () => {
  let os = "Windows";
  /mac/i.test(navigator.userAgent) && (os = "Mac");
  /linux/i.test(navigator.userAgent) && (os = "Linux");

  downloadEl.textContent = "Download ChitChat for " + os;
  downloadEl.setAttribute("href", getDownloadUrl(os));
};

setOs();
