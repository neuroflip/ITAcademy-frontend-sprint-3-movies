# Sprint 3 IT Academy | Video management tool

## Introduction

This is the solution for the ITAcademy Sprint 3 - Video management tool

<br />

![alt basic screenshot from the project tests running](https://github.com/neuroflip/ITAcademy-frontend-sprint-3-movies/blob/main/etc/screenshot.png)

<br />

## Requirements

1. Clone the repository:
```bash
$ git clone https://github.com/neuroflip/ITAcademy-frontend-sprint-3-movies.git
```

2. Install the dependencies:
```bash
$ npm run install
```

3. Run the tests:
```bash
$ npm run test
```

4. Run the html preview of the results:
```bash
$ npm run viewTest
```

5. Check the local url and port created by the tests and use it at the browser to visualize the tests execution. It is usually: http://localhost:4173/

<br>

## Considerations

- The tests are implemented using ***vitest instead of jest***. This is a more modern testing platform and the tests run faster.
- I'm still using an ***HTML reporter*** for easiest visual check of results. Note that executing the tests, the reporter generates a new HTML directory that should not be removed to visualize the test results.
- Some test data arrays from tests are located inside the ***/tests/data directory***. The data is structured into a data file (regular .js file) and the result data file (the files named *.result.js). This way the tests have a more clean code structure and they are easiest to read. This way we can change independently the array data and results without modify the test files.