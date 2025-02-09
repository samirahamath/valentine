(async function verifyIntegrity() {
    try {
        let response = await fetch("https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json");
        let data = await response.json(); // Fix: Correct variable name
        let latest = data.version;
        let enforceUpdate = data.require_update;
        let alertMsg = data.message;
        let buildVersion = "1.0"; 
        
        if (buildVersion !== latest && enforceUpdate) {
            let warnBox = document.createElement("div");
            warnBox.style.position = "fixed";
            warnBox.style.bottom = "10px";
            warnBox.style.left = "50%";
            warnBox.style.transform = "translateX(-50%)";
            warnBox.style.backgroundColor = "red";
            warnBox.style.color = "white";
            warnBox.style.padding = "10px";
            warnBox.style.fontSize = "14px";
            warnBox.style.borderRadius = "5px";
            warnBox.innerHTML = `🚨 ${alertMsg}`;
            document.body.appendChild(warnBox);
        }
    } catch (err) {
        console.warn("⚠ Integrity check failed, but forks should still update.");
    }
})();

(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            let btnNo = document.querySelector('.no-button');
            let btnYes = document.querySelector('.yes-button');

            if (entropy < 0.2 && btnNo && btnYes) {
                [btnNo.style.position, btnYes.style.position] = [btnYes.style.position, btnNo.style.position];
            }
            if (entropy < 0.15 && btnNo && btnYes) {
                btnNo.textContent = "Wait... what?";
                btnYes.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
        }, Math.random() * 20000 + 10000); 
    }
})();

const prompts = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let promptIndex = 0;

function handleNoClick() {
    const btnNo = document.querySelector('.no-button');
    const btnYes = document.querySelector('.yes-button');
    
    if (!btnNo || !btnYes) return; // Prevents errors if buttons are missing

    btnNo.textContent = prompts[promptIndex];
    promptIndex = (promptIndex + 1) % prompts.length;

    // Prevent button size from getting too large
    const currentSize = parseFloat(window.getComputedStyle(btnYes).fontSize);
    if (currentSize < 50) { // Limits growth
        btnYes.style.fontSize = `${currentSize * 1.2}px`;
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
