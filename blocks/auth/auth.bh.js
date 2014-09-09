module.exports = function(bh) {
    bh.match('auth', function(ctx) {
        ctx.content('Вход');
        // ctx.content({ 
        //     block: 'button',
        //     caption: 'Вход'
        // });
    });
};
