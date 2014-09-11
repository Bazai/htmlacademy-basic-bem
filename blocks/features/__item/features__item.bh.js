module.exports = function(bh) {
    bh.match('features__item', function(ctx) {
        ctx.content([
            { block: 'heading', content: ctx.param('title'), mods: { theme: 'bright' } },
            { block: 'simple-text', content: ctx.content() }
        ], true);
    });
};
