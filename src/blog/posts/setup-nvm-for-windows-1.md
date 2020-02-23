---
title: This is an Example Page. Do you enjoy it?
heroimage: setup-nvm-for-windows-1.png
published: true
description: What what 😲...
tags: ["post", "nvm", "windows", "node", "beginners"]
slug: setup-nvm-for-windows-1
date: 2017-02-04
authors: ["danharris"]
---

Well... have no fear 😱, that's where this _short_ article comes in.

_\* Just a reminder, this article shows the setup in windows... but setup in Mac or Linux is pretty similar 👍._

### why bother managing node versions

Well I'm glad you asked! When working on a project (especially within a team), its ideal to have as similar an environment as possible to both your peers, but more importantly, your build server.
Strange issues 👻 can arise when using mismatched versions of node (and by extension npm)... e.g. dependencies failing to build, hard to debug runtime errors .etc.

So... when you're working across a single project at any time, that's fairly easy. You simply install a matching version of node & off you go. The trick comes when you need to jump across multiple projects (which may have multiple node requirements).

```javascript
// comments
const foo = 3;
const bob = () => {
  return 5;
};

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
```

```css
/* main content wrappers */
main.outer-wrapper,
.content__outer-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* set default grid for content */
.content__inner-wrapper {
  margin-top: var(--layout-navbar-height);
  max-width: var(--layout-content-max-width);
  padding: 5rem var(--layout-content-default-gutter);
  align-items: unset;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1.5rem;
}

@media (max-width: 576px) {
  .content__inner-wrapper {
    padding: 3rem 0.5rem;
  }
}

.content__inner--full-width {
  grid-column: span 12;
}

@media (max-width: 576px) {
  /* full-width views need some extra padding for smaller res */
  .content__inner--full-width {
    padding: 0.5rem;
  }
}

.content__inner--tile {
  grid-column: span 6;
}

@media (max-width: 576px) {
  /* make content tiles take up entire window on mobile-ish sizes */
  .content__inner--tile {
    grid-column: span 12;
  }
}

/* quick hack to put fira code as the prism display font */
pre.prism-code.builtin-prism-theme {
  font-family: "FuraCode Nerd Font Mono", monospace;
}
```

```html
<nav class="navbar navbar--shadow" aria-label="Main Navigation">
  <div class="navbar__inner-wrapper">
    {# CSS checkbox abuse courtesy of https://codepen.io/erikterwan/pen/EVzeRP #}
    <div class="navbar__main-nav__mobile-menu">
      <input id="navbar__main-nav__mobile-menu__toggle--input-id" class="navbar__main-nav__mobile-menu__toggle" type="checkbox" tabindex='0'/>
      <label for="navbar__main-nav__mobile-menu__toggle--input-id"></label>
      <span class="navbar__main-nav__mobile-menu__hamburger"></span>
      <span class="navbar__main-nav__mobile-menu__hamburger"></span>
      <span class="navbar__main-nav__mobile-menu__hamburger"></span>
      <ul class="navbar__main-nav navbar__main-nav--mobile">
        <li class="navbar__main-nav__link__outer">
          <a class="navbar__main-nav__link {{"active" if (base_route == "home")}}" href="/">home</a>
        </li>
        <li class="navbar__main-nav__link__outer">
          <a class="navbar__main-nav__link {{"active" if (base_route == "blog")}}" href="/blog">blog</a>
        </li>
        <li class="navbar__main-nav__link__outer">
          <a class="navbar__main-nav__link{{"active" if (base_route == "presentations")}}"
            href="/presentations">slides</a>
        </li>
        <div class="navbar__main-nav__mobile-menu--shadow navbar--shadow"></div>
      </ul>
    </div>
    <div class="navbar__logo">
      <a class="navbar__logo__profile-pic" href="/" aria-label="home">
        <div role="presentation" class="navbar__logo__profile-pic__img-preview"></div>
        <div class="img--lazy-load" role="img" aria-label="dan profile" data-src="/heapsgooddev-profile.jpg"></div>
      </a>
      <a aria-label="twitter link" rel="noopener" class="navbar__logo__twitter-link external-icon--exempt"
        href="https://twitter.com/danharris_io" target="_blank">
      </a>
    </div>
  </div>
</nav>
```

```typescript
class MyClass {
  public static myValue: string = "hey";
  constructor(init: string) {
    this.myValue = init;
  }
}

module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
    const foo = 6;
  }
}

declare magicNumber number;
```

By managing our node version, we're able to quickly switch our global node context. Hazah! Problems gone 🦸‍♀️.

### install nvm-for-windows

To manage our node version and flip between various node versions, we're going to use an awesome tool called [nvm-for-windows](https://github.com/coreybutler/nvm-windows).

Installing nvm-for-windows is as simple as heading on over to
[github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases) and downloading the latest release 👉 `nvm-setup.zip`. The setup zip bundle will include an installer... and away you go.

A couple of recommendations when running through the installer;

- install _nvm-for-windows_ into a directory other than the default (e.g. `c:\my-workspace\apps\nvm`). This will fix a couple of strange issues that sometimes occur with spaces in the directory path (`Program Files\nvm`). It also allows you to segregate your global node installs and any other node_modules.
- after installing, sometimes you may have to restart your computer for the path variables to be picked up (e.g. if you get the error `'nvm' is not recognized as an internal or external command`)

After installing, you should be able to use the `nvm` command on the commandline. Next up, let's set a node version to use.

### use a node version

Setting our node version is now as simple as installing the right version using nvm 👉 `nvm install 8.9`. We then need to 'use' that version (which is how we change node versions using nvm - unless you've got a slicker setup using a `.nvmrc` or similar)... 👉 `nvm use 8.9`.

_\* I'd run the above commands - or at least the install command - using an elevated commandline, sometime odd things happen 🤷‍♂️._

### well that wasn't hard

Hopefully the above was pretty easy... but sometimes odd things occur. Let me know in the comments if you get a strange error or some other heeby-jeeby.

--
