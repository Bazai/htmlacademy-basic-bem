module.exports = function(bh) {
    bh.match('footer', function(ctx) {
        ctx.content([{ block: 'footer', elem: 'heading' }, { block: 'contacts' }]);
        // ctx.content({ block: 'contacts' });
    });
};
