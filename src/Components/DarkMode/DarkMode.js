import React from "react";

useEffect(() => {
  // Function to handle theme toggle
  const handleThemeToggle = () => {
    const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

    // Toggle icons inside button
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    // Toggle theme in local storage
    if (localStorage.getItem("color-theme") === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  };

  // Add event listener for theme toggle button
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", handleThemeToggle);
  }

  // Cleanup function
  return () => {
    if (themeToggleBtn) {
      themeToggleBtn.removeEventListener("click", handleThemeToggle);
    }
  };
}, []);