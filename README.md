# NgFileUpload

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Ref. https://www.ninjadevcorner.com/2019/01/how-to-upload-file-with-angular-6-7-tutorial.html
* Ref. https://www.npmjs.com/package/angular-file-uploader
* Ref. https://valor-software.com/ng2-file-upload/
* Ref: https://www.angularjs4u.com/angularjs2/10-angular-2-file-upload-demos/
* Ref: https://mdbootstrap.com/docs/jquery/forms/file-input/
* Ref: https://developer.mozilla.org/en-US/docs/Web/API/File
* Ref: https://stackoverflow.com/questions/40165271/how-to-reset-selected-file-with-input-tag-file-type-in-angular-2/40165524#40165524

* Server side ASP.net core : https://docs.microsoft.com/en-au/aspnet/core/mvc/models/file-uploads?view=aspnetcore-2.2
* Ref. https://stackoverflow.com/questions/55447502/asp-net-core-and-angular-7-cors

## Install rxjs-compat Library.
* Run: ```npm install rxjs-compat --save ```
## Install Bootstrap 4
* Run: ```npm install bootstrap --save```
* In styles.css add: ```@import "~bootstrap/dist/css/bootstrap.min.css" ```
## Install ng2-file-upload Library
* Run: ```npm install ng2-file-upload --save```
## Check: Update app.module.ts

# Create the Node.js Backend

## Check: Install packages
* Run: ```npm install express multer body-parser --save```
* Run:```npm install nodemon --save-dev ``` and ``` npm install -g nodemon```
* Add folder uploads
* Add 'server.js'
* Run: ```nodemon server.js``` in folder /src/app