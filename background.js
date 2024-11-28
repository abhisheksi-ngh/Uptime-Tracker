let startTime = new Date().getTime();

chrome.runtime.onInstalled.addListener(() => {
    console.log("Uptime Tracker Installed!");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "getUptime") {
        const currentTime = new Date().getTime();
        const uptime = Math.floor((currentTime - startTime) / 1000); // seconds
        sendResponse({ uptime });
    }
});
