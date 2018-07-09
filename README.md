![angular-card](https://user-images.githubusercontent.com/34129569/41152709-1f6e8966-6b32-11e8-89d2-f791d638df7c.png)

# PocAngular2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Heroku deployment
```js
-----> Node.js app detected
-----> Creating runtime environment
       
       NPM_CONFIG_LOGLEVEL=error
       NODE_VERBOSE=false
       NODE_ENV=production
       NODE_MODULES_CACHE=true
-----> Installing binaries
       engines.node (package.json):  unspecified
       engines.npm (package.json):   unspecified (use default)
       engines.yarn (package.json):  unspecified (use default)
       
       Resolving node version 8.x...
       Downloading and installing node 8.11.3...
       Using default npm version: 5.6.0
       Resolving yarn version 1.x...
       Downloading and installing yarn (1.8.0)...
       Installed yarn 1.8.0
-----> Restoring cache
       Skipping cache restore (not-found)
-----> Building dependencies
       Installing node modules (yarn.lock)
       yarn install v1.8.0
       [1/4] Resolving packages...
       [2/4] Fetching packages...
       info fsevents@1.2.4: The platform "linux" is incompatible with this module.
       info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
       [3/4] Linking dependencies...
       [4/4] Building fresh packages...
       Done in 47.30s.
-----> Caching build
       Clearing previous node cache
       Saving 2 cacheDirectories (default):
       - node_modules
       - bower_components (nothing to cache)
-----> Pruning devDependencies
       yarn install v1.8.0
       [1/4] Resolving packages...
       [2/4] Fetching packages...
       info fsevents@1.2.4: The platform "linux" is incompatible with this module.
       info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
       [3/4] Linking dependencies...
       [4/4] Building fresh packages...
       warning Ignored scripts due to flag.
       Done in 6.01s.
-----> Build succeeded!
-----> Discovering process types
       Procfile declares types     -> (none)
       Default types for buildpack -> web
-----> Compressing...
       Done: 28.8M
-----> Launching...
       Released v3
       https://mysterious-spire-48612.herokuapp.com/ deployed to Heroku
      
