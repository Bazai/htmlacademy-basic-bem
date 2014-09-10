module.exports = function(bh) {
    bh.match('simple-text', function(ctx) {
        ctx.tag('p');
    });
};
