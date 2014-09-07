module.exports = function(bh) {
    bh.match('page_type_index', function(ctx) {
        ctx.content({ block: 'menu' });
    });
};
