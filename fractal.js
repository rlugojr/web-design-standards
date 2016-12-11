'use strict';

const path = require('path');
const fractal = require('@frctl/fractal').create();
const dir = __dirname;

fractal.set('project.title', 'Draft U.S. Web Design Standards');

// use Nunjucks as the templating engine
fractal.components.engine(require('@frctl/nunjucks')({
  filters: {}
}));

fractal.components.set('ext', '.njk');
fractal.components.set('path', path.join(dir, 'components'));
fractal.components.set('default.preview', '@uswds');

fractal.docs.set('path', path.join(dir, 'docs'));

// mount /dist at /assets
fractal.web.set('static.path', path.join(dir, 'dist'));
fractal.web.set('static.mount', 'assets');
fractal.web.set('builder.dest', path.join(dir, 'build'));

module.exports = fractal;
