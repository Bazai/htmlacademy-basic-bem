module.exports = function(bh) {
    bh.match('heading', function(ctx) {
        ctx.tag('span');
    });
};
