#!/usr/bin/env node

const fs = require('fs'),
    glob = require("glob");

const allProcess = process.argv;

glob(allProcess[2]+'/**/*.*', function (er, files) {
    const half_number = files.length/2;
    shuffle(files).forEach(function (file, i) {
        var i = i+1;
        if (half_number >= i) {
            fs.unlinkSync(file);
        }
    });
    console.log('✊✊✊');
});

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}