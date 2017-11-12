# Server side rendering with React
### Link to the tutorial: https://www.youtube.com/watch?v=82tZAPMHfT4&list=PLl-K7zZEsYLkbvTj8AUUCfBO7DoEHJ-ME&index=5

There are a few differences from the video:
1. The babel script in package.json does not work on Windows with Powershell because of the && chain command. So I replaced with two separate commands:
    1. babelIndex
    2. babelSrc
2. Added a new script in package.json to start serving firebase hosting locally:<br>"firebaseServe": "firebase serve --only functions,hosting"
3. Moved index.html from ./public to ./functions/public. Otherwise server side won't work
4. Removed the reference to bundle.js in index.html as it's not needed anymore
