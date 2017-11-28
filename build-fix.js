const fs = require('fs');
const path = require('path');
const mv = require('mv');
const rimraf = require('rimraf');

function getPath(folder, regex) {
   return path.join(folder, fs.readdirSync(folder).find(e => {
       return regex.test(e);
    }));
}

function replace(file, regex, replace) {
    // load the html file
    var fileContent = fs.readFileSync(file, 'utf8');

    // replacePath is your match[1]
    fileContent = fileContent.replace(regex, replace);

    // this will overwrite the original html file, change the path for test
    fs.writeFileSync(file, fileContent);
}

// rimraf.sync('./build');
rimraf.sync('./www');
replace(getPath('./build/', /asset-manifest.js/g), /\"static\//g, '"./static/');
replace(getPath('./build/static/js/', /main.*.js/g), /\+\"static\//g, '+"./static/');
replace(getPath('./build/static/css/', /main.*.css/g), /\/static\/media/g, './../../static/media');
replace(getPath('./build/', /index.html/g), /=\"\//g, '="./');

mv('./build', './www', {mkdirp: true}, function(err) {
    if (err) {
        console.log(err);
    }
});
