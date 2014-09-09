module.exports = function(bh) {
    bh.match('header', function(ctx) {
        ctx.tag('header');
        ctx.content([
            { block: 'menu', mix: { block: 'header', elem: 'left' }},
            { block: 'auth', mix: { block: 'header', elem: 'right' }}
        ]);
    });
};
