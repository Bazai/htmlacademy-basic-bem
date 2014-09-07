module.exports = function(bh) {
    bh.match('menu__item', function(ctx) {
        ctx.tag('a');
        ctx.attr('href', ctx.param('url'));
        ctx.content(ctx.param('caption'));
    });
};
