document.addEventListener("DOMContentLoaded", () => {
    const uptimeDisplay = document.getElementById("uptime-display");

    function updateUptime() {
        chrome.runtime.sendMessage("getUptime", (response) => {
            const seconds = response.uptime % 60;
            const minutes = Math.floor(response.uptime / 60) % 60;
            const hours = Math.floor(response.uptime / 3600);
            uptimeDisplay.textContent = `Uptime: ${hours}h ${minutes}m ${seconds}s`;
        });
    }

    updateUptime();
    setInterval(updateUptime, 1000); // Update every second
});
