module.exports = function(bh) {
    bh.match('header', function(ctx) {
        ctx.content('');
    });
};
