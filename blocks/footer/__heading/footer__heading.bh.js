module.exports = function(bh) {
    bh.match('footer__heading', function(ctx) {
        ctx.content('Это Заголовок Футера');
    });
};
