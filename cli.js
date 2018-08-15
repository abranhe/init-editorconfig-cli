#!/usr/bin/env node
'use strict';
const init = require('init-editorconfig');
const meow = require('meow');
const feedback = require('@abranhe/feedback')

const cli = meow(`
	Usage
	  $ init-editorconfig <option>

	Options
		--help              Show this message and close
		--feedback, -f      Send a feedback
		--root,     -r      Special property that should be specified at the top
		                    of the file
		--match,    -m      Set special characters to be recognized for EditorConfig
		--also,     -a      Leave black space between properties
		--property, -p      Set a new property
		--value,    -v      Set value for property


	Example
		$ init-editorconfig --root true -m "*.py"  -p indent_style -v space
`,{
	flags: {
		feedback: {
			type: 'boolean',
			alias: 'f'
		},
		root: {
			type: 'string',
			alias: 'r'
		},
		match: {
			type: 'string',
			alias: 'm'
		},
		property: {
			type: 'string',
			alias: 'p'
		},
		value: {
			type: 'string',
			alias: 'v'
		},
		also: {
			type: 'boolean',
			alias: 'a'
		},
		help: {
			type: 'boolean',
			alias: 'h'
		}
	}
});

if(cli.flags.feedback) {
	feedback.project('init-editorconfig');
	feedback.description('Please specify if the issue is with the API project or the CLI');
	feedback.message(feedback.defaultMessage);
	feedback.web();
}

if(cli.flags.also) {
	init.also();
}

if(cli.flags.root) {
	init.root(cli.flags.root);
}

if(cli.flags.match) {
	init.match(cli.flags.match);
}

if(cli.flags.property && cli.flags.value) {
	init.property(cli.flags.property, cli.flags.value);
}

init.build();
