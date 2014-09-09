module.exports = function(bh) {
    bh.match('page_type_index', function(ctx) {
        ctx.content([
                { block: 'header' },
                { block: 'logo' },
                { block: 'features' },
                { block: 'heading', content: 'Test' },
                { block: 'button', content: 'Вход' }
            ]);
    });
};
