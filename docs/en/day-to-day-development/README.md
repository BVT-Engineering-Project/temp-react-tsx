# Contributing

## How to contribute

The app repository has two main branches: master and staging.
Submitting a pull request
* Create a new branch from `staging` branch
* Name the branch with the following format: 
* Create a draft PR for your feature, targeting staging
* Add an informative description outlining the feature or bug you are working on.
* Add a link to the issue you are working on if there is one and add a link to the pull request in the issue.
* Work on your feature, pushing your changes often. If you need to consult colleagues as you work, @ them in your draft PR.
* When you consider your work finished, mark the PR as ready for review and request a review from a colleague.
* Fix and push all outstanding issues arising from the PR review.
* When the PR is ready to merge into staging perform a squash merge (keep the generated comments in the commit description to a sensible length)
* At this point, GitHub Actions will build our frontend assets, and trigger a deploy to the staging server: `example-staging`
* If any further tweaks and changes are required, open a new PR against `staging` using the steps above.

## Testing a version

If you'd like to share your work on a server you can release you branch on the test server: https://test.example

## Code style
The app is use react js with nextjs framework. The code style is follow the nextjs style guide.

### Seting up ESLint
We use a combination of [prettier](https://prettier.io/) and [eslint](https://eslint.org/) to ensure our code is formatted the same regardless of the author.
⚠️  Your code will not be accepted if it does not pass the linter. ⚠️

#### VSCode

#### Sublime

#### Atom

#### Neovim / Vim


## Build Process

## Code review
