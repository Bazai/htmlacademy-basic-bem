module.exports = function(bh) {
    bh.match('features__item', function(ctx) {
        ctx.content([
                { block: 'heading', caption: ctx.param('caption') },
                'Some text'
            ]);
    });
};
