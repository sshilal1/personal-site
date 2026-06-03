import { defaultThemeId, showThemeLab } from "./site-data.js";
import { themes } from "./theme-renderers.js";

const getInitialThemeIndex = () => {
  const params = new URLSearchParams(window.location.search);
  const requestedTheme = showThemeLab
    ? params.get("theme") || window.localStorage.getItem("portfolio-theme") || defaultThemeId
    : defaultThemeId;
  const index = themes.findIndex((theme) => theme.id === requestedTheme);
  return index >= 0 ? index : themes.findIndex((theme) => theme.id === defaultThemeId);
};

let activeTheme = getInitialThemeIndex();

const renderApp = () => {
  const theme = themes[activeTheme] || themes[0];
  document.body.className = `${theme.className}${showThemeLab ? "" : " theme-lab-hidden"}`;
  const app = document.querySelector("#app");
  if (!app) return;

  app.innerHTML = `
    ${showThemeLab ? `<aside class="design-switcher" aria-label="Portfolio theme options">
      <div class="switcher-top">
        <div><span>THEME LAB</span><b>${theme.number} / ${String(themes.length).padStart(2, "0")}</b></div>
        <button class="switcher-toggle" type="button" aria-expanded="false">Swap theme <span>+</span></button>
      </div>
      <div class="switcher-panel">
        <p>All options use the same portfolio data. Swap the theme here, or deploy with <code>?theme=${theme.id}</code>.</p>
        <div class="switcher-options">
          ${themes
            .map(
              (item, index) => `
            <button class="switcher-option ${index === activeTheme ? "is-active" : ""}" data-index="${index}" type="button">
              <span>${item.number}</span><strong>${item.name}</strong><small>${item.mood}</small>
            </button>`,
            )
            .join("")}
        </div>
        <div class="switcher-detail"><span>Current theme</span><b>${theme.name}</b><small>${theme.detail}</small></div>
      </div>
    </aside>` : ""}
    ${theme.render()}
  `;

  const switcher = app.querySelector(".design-switcher");
  const toggle = app.querySelector(".switcher-toggle");
  toggle?.addEventListener("click", () => {
    switcher?.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(switcher?.classList.contains("is-open")));
  });
  app.querySelectorAll(".switcher-option").forEach((button) => {
    button.addEventListener("click", () => {
      activeTheme = Number(button.dataset.index);
      window.localStorage.setItem("portfolio-theme", themes[activeTheme].id);
      renderApp();
    });
  });
};

renderApp();
