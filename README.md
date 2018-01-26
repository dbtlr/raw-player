# Raw Player

**Warning, this is an experiment and a work in progress. It may be handy for you to learn from but it is not intended to be used for anything other than educational purposes.**

This is an experiment in building a JavaScript video player without any frameworks or libraries. The only exception to this is that I'm using webpack and babel in order to compile ES6 into browser ready code.

![Screenshot](https://github.com/dbtlr/raw-player/raw/master/screenshot.png)

## Getting Started

Buy design this project does not have any direct production dependencies. Instead, this project relies on Webpack, Babel, and a few Webpack plugins in order to automate a development environment and production builds.

### Setting up development

Make sure you have `yarn` installed before you get started. If you do not, installation docs can be found here: https://yarnpkg.com/en/docs/install

First, let's install dependencies.

```bash
yarn install
```

To start up the dev server, simply run:

```bash
yarn start
```

In order to produce a new build, run:

```bash
yarn build
```

## Attributions

The SVG icons embedded in this project were borrowed from the FontAwesome 5 free collection.

More information on this fantastic project can be found here: https://fontawesome.com

## License

This player is being offered under the MIT license.
