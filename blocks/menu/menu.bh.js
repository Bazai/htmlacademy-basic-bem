module.exports = function(bh) {
    bh.match('menu', function(ctx) {
        ctx.tag('nav');
        ctx.content([
            {
                block: 'menu',
                elem: 'item',
                caption: 'Главная',
                url: 'index'
            },
            {
                block: 'menu',
                elem: 'item',
                caption: 'Новости',
                url: 'news'
            }
        ]);
    });
};
