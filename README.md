# BYRDMR Variations

This repo is a place to play with and improve upon code from my [byrdmr repo](https://github.com/Simon994/byrdmr)

## Running and testing locally
Can be done in the same way as the original [byrdmr repo](https://github.com/Simon994/byrdmr).
In addition, scripts for linting have been added:
* To run all linting: `npm run lint-all`
* `npm run stylelint-fix` and `npm run eslint-fix` will attempt to fix errors found by stylelint and eslint, respectively
* A pre-commit hook is now also included which will lint and test before each commit

## Summary of Updates

### Code quality
* Update configuration of eslint to enforce more rules and improve consistency in code
* Add stylelint for linting CSS
* Add pre-commit hook with husky, to run linting before each commit
* Split CSS into separate files for each component

