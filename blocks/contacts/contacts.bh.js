module.exports = function(bh) {
    bh.match('contacts', function(ctx) {
        ctx.content('Контакты');
        // ctx.content({ block: 'contacts' });
    });
};
