module.exports = function(bh) {
    bh.match('heading', function(ctx) {
        ctx.tag('span');
        ctx.content(ctx.param('caption'));
    });
};
