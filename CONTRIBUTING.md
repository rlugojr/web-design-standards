# Welcome!

We're so glad you're thinking about contributing to an 18F open source project! If you're unsure about anything, just ask — or submit the issue or pull request anyway. The worst that can happen is you'll be politely asked to change something. We appreciate all friendly contributions.

We want to ensure a welcoming environment for all of our projects. Our staff follows the [18F Code of Conduct](https://github.com/18F/code-of-conduct/blob/master/code-of-conduct.md) and all contributors should do the same.

We encourage you to read this project's CONTRIBUTING policy (you are here), its [LICENSE](LICENSE.md), and its [README](README.md).

If you have any questions or want to read more, check out the [18F Open Source Policy GitHub repository]( https://github.com/18f/open-source-policy), or just [shoot us an email](mailto:18f@gsa.gov).

## Guidelines

### Submitting an issue

To help us get a better understanding of the issue you are submitting, please leverage the following outline (as used in the following [Girl Develop It issue template](https://github.com/girldevelopit/gdi-new-site/issues/83)):

**Description**

*Include a high-level description of the feature or error here including steps of how to recreate it if applicable. Include any benefits, challenges, or considerations. This can be short and sweet.*

**Ask**

*Describe the desired behavior and what would deem this issue, bug, or feature complete.*

**To Do**
- [ ] Steps
- [ ] To
- [ ] Complete/Fix

**Additional Info**

*Include any images, steps to recreate, notes, emojis, or whatever.*

### Submitting a pull request

Here are a few guidelines to follow when submitting a pull request:

1. Create a GitHub account or sign in to your existing account.
1. Fork this repo into your GitHub account (or just clone it if you're an 18F team member). Read more about forking a repo here on GitHub:
[https://help.github.com/articles/fork-a-repo/](https://help.github.com/articles/fork-a-repo/)
1. Create a branch that lightly defines what you're working on (e.g. add-styles).
1. Ensure that your contribution works via `npm`, if applicable. See below under
   _Install the package locally via `npm-link`_.
1. Once you're ready to submit a pull request, push your branch up to the repo.
1. Submit your pull request against the `18f-pages-staging` branch.

Questions or need help with setup? Feel free to open an issue here [https://github.com/18F/web-design-standards/issues](https://github.com/18F/web-design-standards/issues).

## Install the package locally via `npm-link`

If you have a clone of this repository locally and would like to use it on
another project without using the published version, you can use `npm link`.

**Please note** that this use case is primarily useful if you're developing on the
Web Design Standards locally and would like to see those changes in another
project that is using them. Using `npm link` _should not be done_ if you are using
a release version of the Web Design Standards. Please follow the `npm install`
instructions above if you are using a release version.

The following commands will link your local `web-design-standards` project to
another project.

```
cd path/to/web-design-standards # note: your paths will differ
npm link
cd path/to/another/project-using-npm # note: this project name is reused below
npm link uswds
```

The `node_modules` directory in your project will contain a symbolic link of the
contents of the `web-design-standards` project under `node_modules/uswds` within
the `project-using-npm`. For more information on `npm-link`, you can read about
it in the [`npm-link` documentation](https://docs.npmjs.com/cli/link).

### Using `uswds` with `npm`

With the `uswds` package installed in your `node_modules` directory, you can
access various included dependencies from the package itself.

Running `require( 'uswds' )` will include the contents of the `components.js`
file in your project. This file does not export currently export anything so it
doesn't need to be assigned to a variable. This library depends on `jQuery` and
`$` to be on the `window` object before it is required. So please be sure that
you include the jQuery dependency from the `uswds` package before `components.js`
is loaded via the `require()` statement.

```html
<script src="./node_modules/uswds/assets/js/vendor/jquery-1.11.3.min.js"></script>
<!-- Loading the components.js file directly from the package -->
<script src="./node_modules/uswds/assets/js/components.js"></script>
<!-- Or loading the components.js file via `require()` within your project's npm-asset-pipeline -->
<script src="path/to/project/all.js"></script>
```

## Licenses and attribution

### A few parts of this project are not in the public domain

The Source Sans Pro font files in `assets/fonts` are a customized subset of [Source Sans Pro](https://github.com/adobe-fonts/source-sans-pro), licensed under the [SIL Open Font License](http://scripts.sil.org/cms/scripts/page.php?item_id=OFL), and copyright [Adobe Systems Incorporated](http://www.adobe.com/), with Reserved Font Name 'Source'. All Rights Reserved. Source is a trademark of Adobe Systems Incorporated in the United States and/or other countries.

The Merriweather font files in `assets/fonts` are from [Google Web Fonts](https://www.google.com/fonts#UsePlace:use/Collection:Merriweather:400,300,400italic,700,700italic), licensed under the [SIL Open Font License](http://scripts.sil.org/cms/scripts/page.php?item_id=OFL), and copyright [Sorkin Type Co](www.sorkintype.com) with Reserved Font Name 'Merriweather'.

The files in `assets/img` are from [Font Awesome](http://fontawesome.io/) by Dave Gandy under the [SIL Open Font License 1.1](http://scripts.sil.org/OFL).

The files in `assets/_scss/lib/bourbon` are from [Bourbon](http://bourbon.io/), copyright [thoughtbot](https://thoughtbot.com/), inc., under the [MIT license](https://github.com/thoughtbot/neat/blob/master/LICENSE.md).

The files in `assets/_scss/lib/neat` are from [Neat](http://neat.bourbon.io/), copyright [thoughtbot](https://thoughtbot.com/), inc., also under the [MIT license](https://github.com/thoughtbot/neat/blob/master/LICENSE.md).

The file `assets/css/normalize.min.css` is from [Normalize.css](https://github.com/necolas/normalize.css), copyright Nicolas Gallagher and Jonathan Neal, under the [MIT license](https://github.com/necolas/normalize.css/blob/master/LICENSE.md).

The file `assets/js/component.js` includes `politespace.js` from [Politespace](https://github.com/filamentgroup/politespace), copyright Zach Leatherman, under the [MIT license](https://github.com/filamentgroup/politespace/blob/master/LICENSE).

The file `assets/js/vendor/html5shiv.js` is from [HTML5 Shiv](https://github.com/afarkas/html5shiv), copyright Alexander Farkas (aFarkas), under the [MIT license](https://github.com/aFarkas/html5shiv/blob/master/MIT%20and%20GPL2%20licenses.md).

The file `assets/js/vendor/jquery-1.11.3.min.js` is from [jQuery](https://jquery.com/), copyright The jQuery Foundation, under the [MIT license](https://jquery.org/license/).

The file `assets/js/vendor/rem.min.js` is from [REM unit polyfill](https://github.com/chuckcarpenter/REM-unit-polyfill), copyright Chuck Carpenter, under the [MIT license](https://github.com/chuckcarpenter/REM-unit-polyfill/blob/master/LICENSE.md).

The file `assets/js/vendor/respond.js` is from [Respond.js](https://github.com/scottjehl/Respond), copyright Scott Jehl, under the [MIT license](https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT).

The file `assets/js/vendor/selectivisr-min.js` is from [Selectivizr](http://selectivizr.com/), copyright Keith Clark, under the [MIT license](http://opensource.org/licenses/mit-license.php).

The files `assets-styleguide/js/vendor/prism.js` and `assets-styleguide/css/prism.css` are from [Prism](http://prismjs.com/), copyright Lea Verou, under the [MIT license](https://github.com/PrismJS/prism/blob/gh-pages/LICENSE).

### The rest of this project is in the public domain

The rest of this project is in the worldwide [public domain](LICENSE.md).

This project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.
