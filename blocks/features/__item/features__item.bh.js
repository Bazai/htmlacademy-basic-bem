module.exports = function(bh) {
    bh.match('features__item', function(ctx) {
        ctx.content([
            { block: 'heading', content: ctx.param('title') },
            { block: 'simple-text', content: ctx.content() }
        ], true);
    });
};
