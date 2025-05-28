function addMapsTab() {
    const navBar = document.querySelector('div[role="navigation"]');
    const q = new URLSearchParams(location.search).get("q");
    const tabs = navBar.querySelectorAll('div[role="listitem"]');
    

    const baseTab = tabs[2];
    const mapsTab = baseTab.cloneNode(true);
    const link = mapsTab.querySelector('a');

    link.href = `https://www.google.com/maps/search/${encodeURIComponent(q)}`;
    link.querySelector('div').textContent = "Maps";
   

    baseTab.parentElement.insertBefore(mapsTab, baseTab.nextSibling);
}




function addOrthoTab() {
    const navBar = document.querySelector('div[role="navigation"]');
    const q = new URLSearchParams(location.search).get("q");
    const tabs = navBar.querySelectorAll('div[role="listitem"]');
    

    const baseTab = tabs[3];
    const orthoTab = baseTab.cloneNode(true);
    const link = orthoTab.querySelector('a');

    link.href = `https://www.reverso.net/spell-checker/english-spelling-grammar/#text=${encodeURIComponent(q)}`;
    link.querySelector('div').textContent = "Spelling";
   

    baseTab.parentElement.insertBefore(orthoTab, baseTab.nextSibling);
}




function addWRTab() {
    const navBar = document.querySelector('div[role="navigation"]');
    const q = new URLSearchParams(location.search).get("q");
    const tabs = navBar.querySelectorAll('div[role="listitem"]');
    

    const baseTab = tabs[4];
    const WRTab = baseTab.cloneNode(true);
    const link = WRTab.querySelector('a');

    link.href = `https://translate.google.com/?q=${encodeURIComponent(q)}`;

    
    link.querySelector('div').textContent = "Translate";
   

    baseTab.parentElement.insertBefore(WRTab, baseTab.nextSibling);
}




function addChatGptSearch() {
    const micBtn = document.querySelector('div[aria-label="Search by voice"][role="button"]');
    const q = new URLSearchParams(location.search).get("q");


    const GPTBtn = document.createElement("div");
    GPTBtn.setAttribute("role", "button");
    GPTBtn.setAttribute("aria-label", "Search with ChatGPT");
    GPTBtn.className = micBtn.className;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 320 320");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.innerHTML = `<path d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"/>`;
    GPTBtn.appendChild(svg);

    
    GPTBtn.onclick = () => {
        const url = `https://chatgpt.com/?bettergoogle=${encodeURIComponent(q)}`;
        window.open(url, '_blank');
    };

    micBtn.parentElement.insertBefore(GPTBtn, micBtn);
}






function addFilters() {

    const filters = [
        { label: "🔍 Exact search", value: "“ ”" },
        { label: "🌐 Specific website", value: "site:" },
        { label: "📁 File", value: "filetype:pdf" },
        { label: "🚫 Excluding a term", value: "-" },
        { label: "📖 Search for a definition", value: "define:" },
        { label: "🔗 Similar websites", value: "related:" },
        { label: "📝 Particular word in title", value: "intitle:" },
        { label: "🖊️ Particular word in URL", value: "inurl:" },
        { label: "✍️ Particular word in content", value: "intext:" },
        { label: "⛅ Weather in location", value: "weather:" },
        { label: "🎬 Movie", value: "movie:" },
        { label: "📰 From a specific news channel", value: "source:" },
        { label: "🗺️ Display Google Maps preview", value: "map:" },
        { label: "📅 Date range", value: "before:YYYY-MM-DD after:YYYY-MM-DD" },
    ]

    const GS = window.location.href.startsWith("https://www.google.com/search")
    const isLightMode = window.getComputedStyle(document.body, null).getPropertyValue('background-color') === 'rgb(255, 255, 255)';
    const micBtn = document.querySelector('div[aria-label="Search by voice"][role="button"]');
    
    const filtersButton = document.createElement("button");
    filtersButton.className = micBtn.className;
    filtersButton.style.marginRight = "8px";
    filtersButton.innerHTML = "<img src='https://i.imgur.com/G1jxAFF.png' width='20px'>"

    micBtn.parentElement.insertBefore(filtersButton, micBtn);




    const menu = document.createElement("div");
    menu.style.position = "absolute";
    menu.style.backgroundColor = isLightMode ? "white" : "#202124";
    menu.style.color = isLightMode ? "black" : "#e8eaed";
    menu.style.borderRadius = "20px";
    menu.style.margin = GS ? "0 270px" : "-26vh 0";
    menu.style.zIndex = "9999";
    menu.style.boxShadow = "0 0 10px rgba(0,0,0,0.4)";
    menu.style.width = "max-content";
    menu.style.maxHeight = "25vh";
    menu.style.overflowY = "scroll";
    menu.style.display = "none";



    filters.forEach(filter => {
        const filterItem = document.createElement("div");
        filterItem.textContent = filter.label;
        filterItem.style.cursor = "pointer";
        filterItem.style.padding = "10px 20px";
        
        if (isLightMode) {
            filterItem.addEventListener("mouseenter", () => filterItem.style.backgroundColor = "#f0f0f0");
        }
        else {
            filterItem.addEventListener("mouseenter", () => filterItem.style.backgroundColor = "#3c4043");
        }
        
        filterItem.addEventListener("mouseleave", () => filterItem.style.backgroundColor = "transparent");


        filterItem.onclick = () => {
            const qInput = document.querySelector('textarea[aria-label="Search"]');
            if (qInput) {
                qInput.value = filter.value + " " + qInput.value;
                qInput.dispatchEvent(new Event('input'));
            }
        };

        menu.appendChild(filterItem);
    })

    filtersButton.parentElement.appendChild(menu);




    filtersButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });

    document.addEventListener("click", (e) => {
        if (!filtersButton.contains(e.target) && !menu.contains(e.target)) {
            menu.style.display = "none";
        }
    });
    
}







(function() {
    const GS = window.location.href.startsWith("https://www.google.com/search")

    if(GS) try {addMapsTab()} catch(e) {console.log(e)}
    if(GS) try {addOrthoTab()} catch(e) {console.log(e)}
    if(GS) try {addWRTab()} catch(e) {console.log(e)}
    if(GS) try {addChatGptSearch()} catch(e) {console.log(e)}
    try {addFilters()} catch(e) {console.log(e)}
})();