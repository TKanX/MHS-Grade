chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "openNewTab") {
    chrome.tabs.create({ url: "http://localhost:8000" });
  }
});
