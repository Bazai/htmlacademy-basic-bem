var util = require('util');

module.exports = function(bh) {
    bh.match('page', function(ctx) {
        ctx.param('styles', {
            block: 'page',
            elem: 'css',
            url: util.format('%s.css', ctx.mod('type'))
        });
    });
};
