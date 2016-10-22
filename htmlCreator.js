var jsdom = require("node-jsdom").jsdom;
var serializeDocument = require("node-jsdom").serializeDocument;
var fs = require('fs');
var beautify = require('js-beautify').html;
var path = require('path');
var files = fs.readdirSync('./demon-seals/');

var doc = jsdom(['<!DOCTYPE html>',
    '<html>',
    '<head>',
    '</head>',
    '<body>',
    '</body>',
    '</html>'].join('\n'));
var document = doc.defaultView.document;
var newDiv = document.createElement('div');
files.forEach(function (file) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', './demon-seals/' + file);
    newImage.setAttribute('class', 'hideDemon');
    document.body.appendChild(newImage);
});
var writerStream = fs.createWriteStream('result.html');
writerStream.write(beautify(serializeDocument(doc)), 'UTF-8');
writerStream.end();
writerStream.on('finish', function () { console.log("Write completed."); });
writerStream.on('error', function (err) { console.log(err.stack); });
console.log("Program Ended");
