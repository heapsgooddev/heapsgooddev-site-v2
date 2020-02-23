import { wait } from "./wait";

/**
 * slap the fura code font in via a style tag
 * (we want to lazy load this as it isnt critical & is bigger than we like)
 * TODO: better optimise this process
 */
export async function lazyLoadCodeBlockFont() {
  // delay the instantiation by a tick
  await wait();
  const style = document.createElement("style");
  style.textContent = `
      @font-face {
        font-family: 'Fira Code';
        src: url('/fonts/FiraCode-Light.woff2') format('woff2');
        font-weight: 300;
        font-style: normal;
      }

      @font-face {
        font-family: 'Fira Code';
        src: url('/fonts/FiraCode-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: 'Fira Code';
        src: url('/fonts/FiraCode-Medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
      }

      @font-face {
        font-family: 'Fira Code';
        src: url('/fonts/FiraCode-Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
      }
    `;
  document.head.appendChild(style);
}
