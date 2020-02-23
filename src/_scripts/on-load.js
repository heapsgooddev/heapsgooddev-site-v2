import { setHomepageTransition } from "./set-homepage-transition";
import { initBackgroundImageFadeIn } from "./utils/init-background-image-fade-in";
import { lazyLoadCodeBlockFont } from "./utils/lazy-load-code-block-font";
import { lazyLoadStyle } from "./utils/lazy-load-styles";
import { setFocusTab } from "./utils/set-focus-tab";

/**
 * global bootstrap
 */
async function init() {
  // do sync inits
  setFocusTab();
  await setHomepageTransition();

  // do lazy inits
  await lazyInit();
}

/**
 * global bootstrap for all async inits
 */
async function lazyInit() {
  // async inits
  await initBackgroundImageFadeIn();
  // lazy styles/fonts
  await lazyLoadStyle(
    "https://fonts.googleapis.com/css?family=Fira+Mono:500,700&display=swap"
  );
  await lazyLoadCodeBlockFont();
}

document.addEventListener("DOMContentLoaded", init);
