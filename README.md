<p align="center" id="top">
	<a href="https://www.npmjs.com/package/init-editorconfig-cli"><img src="https://cdn.abraham.gq/projects/init-editorconfig/logo.png"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/init-editorconfig-cli"><b>init-editorconfig-cli</b></a>
	: Cli generator of <i>.editorconfig</i> 🐭
</p>

<p align="center">
	<!-- Travis CI -->
	<a href="https://travis-ci.org/abranhe/init-editorconfig-cli"><img src="https://img.shields.io/travis/abranhe/init-editorconfig-cli.svg?logo=travis" /></a>
	<!-- LICENSE -->
	<a href="https://github.com/abranhe/init-editorconfig-cli/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/init-editorconfig-cli.svg" /></a>
	<!-- NPM Version -->
	<a href="https://www.npmjs.com/package/init-editorconfig-cli"><img src="https://img.shields.io/npm/v/init-editorconfig-cli.svg" /></a>
	<!-- @abranhe -->
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<!-- Cash me -->
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<!-- Patreon -->
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
	<!-- Paypal -->
	<a href="https://paypal.me/abranhe/10"><img src="https://cdn.abraham.gq/badges/paypal.svg" /></a>
</p>

# Install

```
npm install init-gitignore-cli
```

# Cli

```
Usage
	$ init-editorconfig <option>

Options
	--help              Show this message and close
	--feedback, -f      Send a feedback
	--root,     -r      Special property that should be specified at the top
											of the file outside of any sections. Set to true stop .editorconfig files search on
											current file
	--match,    -m      Set special characters to be recognized for EditorConfig
	--also,     -a      Leave black space between properties
	--property, -p      Set a new property
	--value,    -v      Set value for property


Example
	$ init-editorconfig --root true -m "*.py" -p indent_style -v space
```

**NOTE**: must have `--property` and `--value` to add a property.

# TODO

- [ ] Accept more than one property at once
- [ ] Make that `--also` work propertly

# Related

- [init-editorconfig](https://github.com/abranhe/init-editorconfig):  API for this module 🐭
-  [init-gitignore](https://github.com/abranhe/init-gitignore): Because making git ignore files should be easier.
-  [init-pkg-json](https://github.com/abranhe/init-pkg-json): 📦 Complex generator of Package.json.
-  [init-pkg-json-cli](https://github.com/abranhe/init-pkg-json-cli): CLI for package.json generator 📦 .
-  [init-gitignore-cli](https://github.com/abranhe/init-gitignore-cli): CLI for init-gitignore

# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# License

[MIT](https://github.com/abranhe/init-editorconfig-cli/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)

<p align="center">
	<a href="#top"><img src="https://cdn.abraham.gq/projects/init-editorconfig/logo.png" width="50"> top ↑</a>
</p>
