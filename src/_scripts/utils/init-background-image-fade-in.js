import * as backgroundImageFadeInModule from "background-image-fade-in";

/**
 * lazy init the background image fade in package
 */
export async function initBackgroundImageFadeIn() {
  //   const backgroundImageFadeInModule = await import("background-image-fade-in");
  backgroundImageFadeInModule.default(
    ".img--lazy-load",
    600,
    "background-size: cover; background-position: center center;",
    "position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;"
  );
}
