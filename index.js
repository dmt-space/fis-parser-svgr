const svgr = require('@svgr/core').default;

module.exports = function(contents, file) {
    if (!file.isText()) {
        contents = contents.toString();
    }

    return svgr.sync(contents, {
        icon: true
    }, {
        componentName: file.filename.replace(/(?:^|\-|_|\s+)(\w)/g, function(_, letter) {return letter.trim().toUpperCase()})
    });
}

