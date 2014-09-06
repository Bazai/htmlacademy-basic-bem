var util = require('util');

module.exports = require('enb/lib/build-flow').create()
    .name('create-page-bemjson')
    .target('target', '?.bemjson.js')
    .defineOption('pageType', 'index')
    .builder(function() {
        return util.format('(%s)', JSON.stringify({
            block: 'page',
            mods: { type: this._pageType }
        }));
    })
    .createTech();
