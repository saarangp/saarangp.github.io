const systemThemePreference = window.matchMedia("(prefers-color-scheme: dark)");

function determineComputedTheme() {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "light" || savedTheme === "dark" ? savedTheme : systemThemePreference.matches ? "dark" : "light";
}

function applySystemTheme() {
  const theme = determineComputedTheme();
  const toggle = document.getElementById("theme-toggle");

  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  if (toggle) {
    const nextTheme = theme === "dark" ? "light" : "dusk";
    toggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
    toggle.setAttribute("title", `Switch to ${nextTheme} theme`);
  }
}

applySystemTheme();

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");

  toggle?.addEventListener("click", () => {
    const nextTheme = determineComputedTheme() === "dark" ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    applySystemTheme();
  });

  applySystemTheme();
});

systemThemePreference.addEventListener("change", () => {
  if (!localStorage.getItem("theme")) applySystemTheme();
});
