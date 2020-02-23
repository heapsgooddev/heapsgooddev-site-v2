const LAST_PAGE_WAS_HOME_PAGE_SESSION_KEY = "lastPageWasHomePage";

/**
 *
 */
export async function setHomepageTransition() {
  const isHomePage = window.__GLOBALS__.isHomePage;
  const lastPageWasHomePage =
    sessionStorage.getItem(LAST_PAGE_WAS_HOME_PAGE_SESSION_KEY) === "true";
  if (isHomePage && !lastPageWasHomePage) {
    const page = document.querySelector(".page");
    page.classList.add("page--to-home");
  } else if (!isHomePage && lastPageWasHomePage) {
    const page = document.querySelector(".page");
    page.classList.add("page--from-home");
  }
  sessionStorage.setItem(LAST_PAGE_WAS_HOME_PAGE_SESSION_KEY, isHomePage);
}
