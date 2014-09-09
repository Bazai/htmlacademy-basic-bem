module.exports = function(bh) {
    bh.match('auth', function(ctx) {
        ctx.content({ 
            block: 'button',
            content: 'Вход2'
        });
    });
};
