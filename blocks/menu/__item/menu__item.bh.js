module.exports = function(bh) {
    bh.match('menu__item', function(ctx) {
        ctx.content('');
    });
};
