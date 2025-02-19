chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "fetchHTML") {
        let htmlContent = document.documentElement.outerHTML;


        fetch("http://localhost:5000/html", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ html: htmlContent })
        }).then(response => {
            console.log("✅ HTML sent successfully!");
        }).catch(error => {
            console.error("❌ sending error:", error);
        });
    }
});
