# Aurelia component and library installer

Install and manage reusable, shared, independent components in your Aurelia apps ;)
Also supports installation of Aurelia plugins and even configuaration of vendor libraries! 

## Install

`npm i aurelia-installer -g`

### Sample component

[contact-detail](https://github.com/kristianmandrup/contact-detail)

## Usage

*Component*
- `create` create a new component folder
- `install` install from git repo
- `bundle` bundle with app
- use it!

*Vendor library*
- bundle it

*Plugin*
- install and configure it

### Install component from repo

Downloads a component from a git repo and copies it to your project

`ai install kristianmandrup/contact-detail`

Repo formats available see [here](https://www.npmjs.com/package/download-git-repo)

- GitHub: github:owner/name or simply owner/name
- GitLab: gitlab:owner/name
- Bitbucket: bitbucket:owner/name

### Bundle component(s)

`ai bundle` (all) or `ai bundle contact-detail`

This will merge the component dependencies with app dependencies in a crafty manner, almost like if you had done it by hand.

### Use it

Currently awaiting a [PR](https://github.com/aurelia/router/pull/381) for full route loading customization! 

You can also use it as follows:

`{ route: 'contacts',  moduleId: 'components/contact-detail/contact-detail', name: 'contacts' }`

Ready to rock!

### Uninstall

`ai uninstall contact-detail`

Removes the component from your app! 

TODO: remove bundled component dependencies...

## Bundle vendor library

`ai vendor bootstrap`

Will lookup the specified vendor library in `lib-registry.json` by name.
If an entry is found, will add this to vendor bundle entries in `aurelia.json` 

## Install plugin

*WIP experimental*

`ai plugin validation`

Supported plugins: All the official and 3rd party plugins listed [here](http://blog.durandal.io/2015/11/17/aurelia-beta-week-day-2-plugins/) 

Simple plugins can be configured directly via `plugin-registry.json`.

There is support for more customized install procedures, such as for `auth` and `materialize` plugins via custom installer classes. 
Please provide configuration your own plugins ;)

#### Contribute vendor bundle specs

Please update the `lib-registry.json` with bundling specifications for your favourite libs ;)

## Development

First link module globally:

`npm link`

Then continue development and test commands in an test Aurelia project. 

## License

MIT