/**
 * set our focus tab listener dooby
 */
export function setFocusTab() {
  window.addEventListener("keydown", handleFirstTab);
}

/**
 * look for a tab key press, then add css to the body
 */
function handleFirstTab(e) {
  // look for a tab key press
  if (e.keyCode === 9) {
    // add a special body class
    document.body.classList.add("show-focus");
    // class is no longer needed, just let em keep tabbing
    window.removeEventListener("keydown", handleFirstTab);
  }
}
