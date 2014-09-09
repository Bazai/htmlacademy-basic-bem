module.exports = function(bh) {
    bh.match('menu', function(ctx) {
        ctx.tag('nav');
        ctx.content([
            {
                block: 'menu',
                elem: 'item',
                caption: 'Главная',
                url: '#'
            },
            {
                block: 'menu',
                elem: 'item',
                caption: 'Информация',
                url: '#'
            },
            {
                block: 'menu',
                elem: 'item',
                caption: 'Новости',
                url: '#'
            },
            {
                block: 'menu',
                elem: 'item',
                caption: 'Прайс-лист',
                url: '#'
            },
            {
                block: 'menu',
                elem: 'item',
                caption: 'Магазин',
                url: '#'
            },
            {
                block: 'menu',
                elem: 'item',
                caption: 'Контакты',
                url: '#'
            },
        ]);
    });
};
