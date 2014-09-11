module.exports = function(bh) {
    bh.match('page_type_index', function(ctx) {
        ctx.content([
                { block: 'header' },
                { block: 'logo' },
                { block: 'features' },
                { block: 'album', content: [
                    { block: 'album', elem: 'page-left',
                        content: [
                            { block: 'heading', content: 'Новости' },
                            { block: 'news', elem: 'entry', date: '25 сентября', content: 'absd' },
                            { block: 'news', elem: 'entry', date: '25 сентября', content: 'absd' },
                            { block: 'button', content: 'Все новости' }
                        ]
                    },
                    { block: 'album', elem: 'page-right',
                        content: [
                            { block: 'heading', content: 'Фотогалерея' },
                            { block: 'gallery' }
                        ]
                    }
                ] },
                { block: 'album', content: [
                    { block: 'album', elem: 'page-left',
                        content: [
                            { block: 'heading', content: 'Контактная информация' },
                            { block: 'contacts' },
                            { 
                                block: 'simple-text', 
                                content: 'sdg'
                                // content: 'Часы работы: <br> /
                                // ПН — ПТ: С 10:00 ДО 22:00 /
                                // СБ — ВС: С 10:00 ДО 19:00' 
                            },
                            { block: 'button', content: 'Как проехать' },
                            { block: 'button', content: 'Обратная связь' }
                        ]
                    },
                    { block: 'album', elem: 'page-right',
                        content: [
                            { block: 'heading' },
                            { block: 'gallery' }
                        ]
                    }
                ] }
            ]);
    });
};
