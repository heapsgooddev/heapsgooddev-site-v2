/**
 * lazy load the specified stylesheet
 */
export async function lazyLoadStyle(src = "") {
  return new Promise(function(resolve, reject) {
    const cssLink = document.createElement("link");
    cssLink.href = src;
    cssLink.rel = "stylesheet";
    cssLink.onload = resolve;
    cssLink.onerror = reject;
    document.head.appendChild(cssLink);
  });
}
