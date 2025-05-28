(function() {
    const prompt = new URLSearchParams(location.search).get("bettergoogle");
    if (!prompt) return;


    const wait1 = setInterval(() => {
        const textarea = document.querySelector('div[id="prompt-textarea"]').querySelector('p');
        if (!textarea) return;
        textarea.textContent = prompt;

        
        const buttonSubmit = document.querySelector('button[id="composer-submit-button"]');
        if (!buttonSubmit || buttonSubmit.disabled) return;

        buttonSubmit.click();
        clearInterval(wait1);
    }, 500);

    

})();