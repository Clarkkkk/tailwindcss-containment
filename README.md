# tailwindcss-containment

[![NPM version][npm-image]][npm-url] [![NPM Downloads][npm-download]][npm-url] [![License][license]][license-url] [![Minified Size][minified-size]][npm-url] [![Build Status][build-status]][github-actions]

A tailwindcss plugin for css containment properties including `contain`, `content-visibility` and `contain-intrinsic-size`.

## Installation

```sh
npm i tailwindcss-containment
```

Or

```sh
pnpm add tailwindcss-containment
```

```sh
yarn add tailwindcss-containment
```

Then add the plugin to `tailwind.config.js`:

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        require('tailwindcss-containment'),
        // ...
    ]
}
```

## Usage

### `contain`
There are 7 classes for `contain` property. Each of them stands for one keyword value.

| `contain` classes     |
| --------------------- |
| `contain-strict`      |
| `contain-content`     |
| `contain-layout`      |
| `contain-style`       |
| `contain-paint`       |
| `contain-size`        |
| `contain-inline-size` |
| `contain-none`        |

If you need multiple keywords value, you can use arbitrary value. For example, `contain-[layout_style]` for `contain: layout style;`. (Note that underscore `_` stands for a space in [tailwindcss convention](https://tailwindcss.com/docs/adding-custom-styles#handling-whitespace))

### `content-visibility`
There are 3 classes for `content-visibility` property: `content-auto`, `content-visible`, `content-hidden`.

| `content-visibility` classes |
| ---------------------------- |
| `content-auto`               |
| `content-visible`            |
| `content-hidden`             |

if you need to use arbitrary value, you should use `content-visibility-[...]` instead of `content-[...]` (for example, `content-visibility-[initial]`). Since there is already a [`content` utility class](https://tailwindcss.com/docs/content) for pseudo-elements in tailwindcss.

### `contain-intrinsic-size`
There are 5 properties to control the intrinsic size of an element in css containment.

| intrinsic size properties       | class prefix                                  |
| ------------------------------- | --------------------------------------------- |
| `contain-intrinsic-size`        | `intrinsic-`, `intrinsic-auto-`               |
| `contain-intrinsic-width`       | `intrinsic-w-`, `intrinsic-w-auto-`           |
| `contain-intrinsic-height`      | `intrinsic-h-`, `intrinsic-h-auto-`           |
| `contain-intrinsic-block-size`  | `intrinsic-block-`, `intrinsic-block-auto-`   |
| `contain-intrinsic-inline-size` | `intrinsic-inline-`, `intrinsic-inline-auto-` |

The possible values are the same expect for the `contain-intrinsic-size` property. Take `contain-intrinsic-width` as an example, we use `intrinsic-w-{number}` or `intrinsic-w-px` for a fixed length. Besides, we use `intrinsic-w-auto-{number}` or `intrinsic-w-auto-px` for `auto <length>` (for example, `intrinsic-w-auto-1` for `contain-intrinsic-width: auto 0.25rem;`). Plus, There is a keyword value `none`, which is used by `intrinsic-w-none`

Arbitrary values are supported as well. For example, `intrinsic-w-[120px]` for `contain-intrinsic-width: 120px;`. (Note that you should use `intrinsic-h-[auto_120px]` instead of `intrinsic-h-auto-[120px]` for `auto <lenght>`.)

As for the `contain-intrinsic-size` property, it is a shorthand for `contain-intrinsic-width` and `contain-intrinsic-height`. It takes single `<length>` (`intrinsic-`) and `auto <length>` (`intrinsic-auto-`) similar to other properties, adjusting both width and length at the same time. If you want to adjust width and length respectively, you should use arbitrary values. For example, `intrinsic-[1000px_300px]`, `intrinsic-[auto_1000px_auto_300px]`, etc.

The full list of length number is similar to [tailwindcss width](https://tailwindcss.com/docs/width). (Use `intrinsic-w-` for example.)

| class             | properties                                      |
| ----------------- | ----------------------------------------------- |
| `intrinsic-w-px`  | `contain-intrinsic-width: 1px;`                 |
| `intrinsic-w-0`   | `contain-intrinsic-width: 0px;`                 |
| `intrinsic-w-0.5` | `contain-intrinsic-width: 0.125rem; /* 2px */`  |
| `intrinsic-w-1`   | `contain-intrinsic-width: 0.25rem; /* 4px */`   |
| `intrinsic-w-1.5` | `contain-intrinsic-width: 0.375rem; /* 6px */`  |
| `intrinsic-w-2`   | `contain-intrinsic-width: 0.5rem; /* 8px */`    |
| `intrinsic-w-2.5` | `contain-intrinsic-width: 0.625rem; /* 10px */` |
| `intrinsic-w-3`   | `contain-intrinsic-width: 0.75rem; /* 12px */`  |
| `intrinsic-w-3.5` | `contain-intrinsic-width: 0.875rem; /* 14px */` |
| `intrinsic-w-4`   | `contain-intrinsic-width: 1rem; /* 16px */`     |
| `intrinsic-w-5`   | `contain-intrinsic-width: 1.25rem; /* 20px */`  |
| `intrinsic-w-6`   | `contain-intrinsic-width: 1.5rem; /* 24px */`   |
| `intrinsic-w-7`   | `contain-intrinsic-width: 1.75rem; /* 28px */`  |
| `intrinsic-w-8`   | `contain-intrinsic-width: 2rem; /* 32px */`     |
| `intrinsic-w-9`   | `contain-intrinsic-width: 2.25rem; /* 36px */`  |
| `intrinsic-w-10`  | `contain-intrinsic-width: 2.5rem; /* 40px */`   |
| `intrinsic-w-11`  | `contain-intrinsic-width: 2.75rem; /* 44px */`  |
| `intrinsic-w-12`  | `contain-intrinsic-width: 3rem; /* 48px */`     |
| `intrinsic-w-14`  | `contain-intrinsic-width: 3.5rem; /* 56px */`   |
| `intrinsic-w-16`  | `contain-intrinsic-width: 4rem; /* 64px */`     |
| `intrinsic-w-20`  | `contain-intrinsic-width: 5rem; /* 80px */`     |
| `intrinsic-w-24`  | `contain-intrinsic-width: 6rem; /* 96px */`     |
| `intrinsic-w-28`  | `contain-intrinsic-width: 7rem; /* 112px */`    |
| `intrinsic-w-32`  | `contain-intrinsic-width: 8rem; /* 128px */`    |
| `intrinsic-w-36`  | `contain-intrinsic-width: 9rem; /* 144px */`    |
| `intrinsic-w-40`  | `contain-intrinsic-width: 10rem; /* 160px */`   |
| `intrinsic-w-44`  | `contain-intrinsic-width: 11rem; /* 176px */`   |
| `intrinsic-w-48`  | `contain-intrinsic-width: 12rem; /* 192px */`   |
| `intrinsic-w-52`  | `contain-intrinsic-width: 13rem; /* 208px */`   |
| `intrinsic-w-56`  | `contain-intrinsic-width: 14rem; /* 224px */`   |
| `intrinsic-w-60`  | `contain-intrinsic-width: 15rem; /* 240px */`   |
| `intrinsic-w-64`  | `contain-intrinsic-width: 16rem; /* 256px */`   |
| `intrinsic-w-72`  | `contain-intrinsic-width: 18rem; /* 288px */`   |
| `intrinsic-w-80`  | `contain-intrinsic-width: 20rem; /* 320px */`   |
| `intrinsic-w-96`  | `contain-intrinsic-width: 24rem; /* 384px */`   |

## Compatibility
CSS containment brings progressive performance improvements for websites, which means it won't affect the website even if the browser does not support css containment. Nevertheless, there could be problems in some browsers only have partial support for css containment. `contain` property is supported by all modern browsers, but `content-visibility` and `contain-intrinsic-size` are not. This plugin does not provide polyfills for them (css containment is hard to polyfill in fact). Therefore, developer should handle those properties carefully.

## Acknowledgment

If you found it useful somehow, I would be grateful if you could leave a star in the project's GitHub repository.

Thank you.

[npm-url]: https://www.npmjs.com/package/tailwindcss-containment
[npm-image]: https://badge.fury.io/js/tailwindcss-containment.svg
[npm-download]: https://img.shields.io/npm/dw/tailwindcss-containment
[license]: https://img.shields.io/github/license/Clarkkkk/tailwindcss-containment
[license-url]: https://github.com/Clarkkkk/tailwindcss-containment/blob/main/LICENSE.md
[minified-size]: https://img.shields.io/bundlephobia/min/tailwindcss-containment
[build-status]: https://img.shields.io/github/actions/workflow/status/Clarkkkk/tailwindcss-containment/.github%2Fworkflows%2Fpublish.yml
[github-actions]: https://github.com/Clarkkkk/tailwindcss-containment/actions
