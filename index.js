const svgr = require('@svgr/core').default;

module.exports = function(contents, file, options) {
    if (!file.isText()) {
        contents = contents.toString();
    }

    var opts = fis.util.clone(options);
    opts.icon = true;

    return svgr.sync(contents, opts, {
        componentName: file.filename.replace(/(?:^|\-|_|\s+)(\w)/g, function(_, letter) {return letter.trim().toUpperCase()})
    });
}

module.exports.defaultOptions = {
    prettier: false
};

