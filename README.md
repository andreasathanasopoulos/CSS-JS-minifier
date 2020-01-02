# CSS JS Minifier
This is a project for concatenating and minifing css and js files.

## Requirements
Docker[https://docs.docker.com/install/] and Docker Compose [https://docs.docker.com/compose/install/]

## Installing
Run ```docker-compose up``` on root folder

## Getting Started
- Add your css and js files inside the folders www/css and www/js
- Then when you save any of them, then grunt automatically generate files inside www/build/css and www/build/js with versioning like main.min.b63069b8.js

## Tips
In case you need your CSS and JS files to be in order, you should replace the lines 8 and 14 with your files.
For example:
```javascript
src: [
    'www/js/file1.js',
    'www/js/file2.js',
    'www/js/file3.js',
],
```