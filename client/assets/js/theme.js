export function initTheme() {
    const themeAutoBtn = document.getElementById("theme-auto");
    const themeLightBtn = document.getElementById("theme-light");
    const themeDarkBtn = document.getElementById("theme-dark");
    const buttons = [themeAutoBtn, themeLightBtn, themeDarkBtn];

    // 1. Charger la préférence
    const savedTheme = localStorage.getItem("theme") || "auto";
    applyTheme(savedTheme);
    updateButtonsState(savedTheme);

    // 2. Ecouter les clics
    themeAutoBtn.addEventListener("click", () => {
        saveAndApply("auto");
    });
    themeLightBtn.addEventListener("click", () => {
        saveAndApply("light");
    });
    themeDarkBtn.addEventListener("click", () => {
        saveAndApply("dark");
    });

    // 3. Ecouter les changements système (si en mode auto)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem("theme") === "auto") {
            applyTheme("auto");
        }
    });

    function saveAndApply(themeName) {
        localStorage.setItem("theme", themeName);
        applyTheme(themeName);
        updateButtonsState(themeName);
    }

    function applyTheme(themeName) {
        let effectiveTheme = themeName;
        if (themeName === "auto") {
            effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
        }

        if (effectiveTheme === "dark") {
            document.documentElement.classList.add("dark-mode");
        } else {
            document.documentElement.classList.remove("dark-mode");
        }
    }

    function updateButtonsState(activeTheme) {
        buttons.forEach(btn => btn.classList.remove("is-selected", "is-info"));

        if (activeTheme === "auto") themeAutoBtn.classList.add("is-selected", "is-info");
        if (activeTheme === "light") themeLightBtn.classList.add("is-selected", "is-info");
        if (activeTheme === "dark") themeDarkBtn.classList.add("is-selected", "is-info");
    }
}
