# test2

This Lambda creates Github Wishabi repo and can assign a team to the repo with Admin, Read or Write access.

This was created without Prime Radiant, so the CI and deploy setup might not be unique.

# Project Structure

## File Structure

```js
.
├── .circleci
|   └── config.yml
├── functions
|   └── github-repo-creator
|   |   └── index.js
|   |   └── function.json
├── project.json
├── README.md
```

### project.json

Must contain the following settings.  These values can be overriden per function in the `function.json`

* name
* description
* memory
* runtime
* timeout
* handler
* nameTemplate 

### function.json

* role (IAM Role)
* description

### "functions" directory

The child directory names will be the name used for the Lambda if `"nameTemplate": "{{.Function.Name}}"` inside `project.json`.  Otherwise it will use Apex default naming.

# Dev Getting Started

Go to the function folder, uncomment the invocation block at the bottom of the `index.js` (or what ever your entrypoint file is), and run it like any other javascript file.

*Tip* Use Wishabi-Dev AWS for root access to test

```js
// The invocation part usually looks like this
exports.handle(sampleEvent, sampleContext, (err) => {
  // ...
});
```

```
cd functions/github-repo-creator
npm install
node index.js
```