# Contributing to TestCafe

TestCafe would not be possible without active support from the community. We appreciate and encourage your contributions.

Review our contribution guidelines:

* [Code of Conduct](#code-of-conduct)
* [General Discussion](#general-discussion)
* [Reporting a Problem](#reporting-a-problem)
* [Code Contribution](#code-contribution)
* [Contribute to Documentation](#contribute-to-documentation)
  * [Documentation for the Current Functionality](#documentation-for-the-current-functionality)
  * [Documentation for New Features](#documentation-for-new-features)

## Code of Conduct

TestCafe abides by the [Contributor Code of Conduct](CODE_OF_CONDUCT.md).

## General Discussion

Join the TestCafe community on Stack Overflow: ask and answer [questions with the TestCafe tag](https://stackoverflow.com/questions/tagged/testcafe).

## Reporting a Problem

If you run into a bug with TestCafe, please file an issue in the [GitHub repository](https://github.com/DevExpress/testcafe/issues).
Search through the existing issues to see if the problem has already been reported or addressed.

When you create a new issue, the template text is automatically added to its body. Complete all the sections in this template to help us understand the problem you are describing. Missing information could delay processing time.

## Code Contribution

Follow the steps below when submitting your code.

1. Search the [list of issues](https://github.com/DevExpress/testcafe/issues) to see if there is an issue for the bug or feature you plan to work on. If none exists, create a new one.

2. To address an already described issue, check the comment thread to make sure that nobody is working on it at the moment. Leave a comment saying that you are willing to fix this issue, and include details on how you plan to do this. Core team members may need to discuss the details of the proposed fix with you. After a green light from them,
leave a comment confirming that you have began your work on said issue.

3. Install [Node.js](https://nodejs.org/en/), [Google Chrome](https://www.google.com/chrome/) and [Firefox](https://www.mozilla.org/en-US/firefox/new/) on your development machine.

4. Fork TestCafe. Clone the fork to your machine and create a new branch. Name this branch with an issue number, for example, `gh852`, `gh853`.

    > To contribute to docs, follow the [Contribute to Documentation](#contribute-to-documentation) guide.

5. Install dependencies. In the root directory of your local copy, run:

    ```sh
    npm install
    ```

    or (for [Yarn](https://yarnpkg.com/) users):

    ```sh
    yarn
    ```

6. Write code and commit your changes to the branch.

    You can build TestCafe and launch it manually:

    ```sh
    gulp build
    node bin/testcafe.js chrome ./tests
    ```

    In this example, `chrome` is a [browser alias](https://testcafe.io/documentation/402639/reference/command-line-interface#browser-list) and `./tests` is a path to the [directory with tests](https://testcafe.io/documentation/402639/reference/command-line-interface#file-pathglob-pattern). You can use other [CLI arguments](https://testcafe.io/documentation/402639/reference/command-line-interface) as needed.

    For additional guidance, see [Build Instructions](#build-instructions).

    > If you run into dependency errors during a build, check that you have appropriate versions of dependencies installed. Clone TestCafe repository into an empty directory (or delete the `node_modules` directory) and install the dependencies.

7. Add regression tests to appropriate sections if you are fixing a bug. To find these sections, search for `Regression` in the code.

    For new functionality, add unit/functional tests.

8. Fetch upstream changes and rebase your branch onto `master`.

9. Run tests to check that everything works.

    ```sh
    gulp test-server
    gulp test-functional-local
    gulp test-client-local
    ```

10. Push changes to your fork and open a pull request.

Before you submit your pull request, it has to satisfy the following conditions:

* The pull request name should describe the changes you implemented.
* The pull request description should contain the [closes](https://github.com/blog/1506-closing-issues-via-pull-requests) directive with an appropriate issue number.
* Run tests, all of which must pass before you continue.
* Code must be linted without errors (see [Build Instructions](#build-instructions))

Please keep in mind that the team may **suspend or reject** pull requests that fail to meet these requirements.

## Build Instructions

During development, run the fast build to save time:

```sh
gulp fast-build
```

Before you submit a pull request, lint your code. The `build` task runs `eslint` to lint your code:

```sh
gulp build
```

After the build, run `npm pack` to pack TestCafe as a `tgz` package in the current folder.

```sh
npm pack
```

To install this package with NPM, run:

```sh
npm install testcafe-x.y.z.tgz
```

Where `x.y.z` is the current TestCafe version, for example, `1.10.1`.

The `/lib` directory stores build artifacts. Build tasks remove this folder before they run. To remove this directory manually, run:

```sh
gulp clean
```
