## Quick Start

Run the following commands:

```
npm install
npm start
```

This will install dependencies, then start the app and mock API.

## Starter Project Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I made the following enhancements:

1. Added a mock API using [json-server](https://github.com/typicode/json-server). Configured `npm start` to run the app and mock API at the same time using [npm-run-all](https://www.npmjs.com/package/npm-run-all). See [Building Applications with React and Flux](https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents) for details on how to set this up from scratch.
1. Installed [react-router-dom](https://www.npmjs.com/package/react-router-dom), [history](https://www.npmjs.com/package/history) (React Router peer dependency), and [cross-env](https://www.npmjs.com/search?q=cross-env) for declaring environment variables.
1. Added some React components to help us get started: Header, Footer, Spinner
1. Added styles to App.css
1. Added `/public/images`.
1. Added data fetching functions in `/src/services`.
1. Added db.json to root as json-server's mock database
1. Overwrote App.css with custom styles
1. Simplified index.js (removed service worker)
1. Deleted from src: index.css, logo.svg, serviceWorker.js, App.test.js
1. Deleted from public: logo files, manifest.json, robots.txt
1. Customized App.js and renamed to App.jsx
