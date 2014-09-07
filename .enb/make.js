var util = require('util'),
    mkdirp = require('mkdirp');

function getLevels(config) {
    return [
        { path: 'bower_components/bem-core/common.blocks', check: false },
        { path: 'bower_components/bem-core/desktop.blocks', check: false },
        'blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

module.exports = function(config) {
    var pages = [ 'index', 'item', 'price', 'shop' ];

    pages.forEach(function(page) {
        var bundlePath = util.format('pages/%s', page); // Путь до папки со страницей относительно корня проекта

        // Создаём папку страницы
        mkdirp.sync(config.resolvePath(bundlePath));

        config.node(bundlePath, function(nodeConfig) {

            // Уровни переопределения
            nodeConfig.addTech([
                require('enb/techs/levels'),
                {
                    levels: getLevels(config)
                }
            ]);

            // Создаём BEMJSON на основании типа страницы (самописная технология)
            nodeConfig.addTech([
                require('./techs/create-page-bemjson'),
                { type: page }
            ]);

            // BEM Decl
            nodeConfig.addTech(require('enb/techs/bemdecl-from-bemjson'));

            // Зависимости
            nodeConfig.addTech(require('enb/techs/deps'));

            // Список исходный файлов
            nodeConfig.addTech(require('enb/techs/files'));

            // BH (Шаблоны)
            nodeConfig.addTech([
                require('enb-bh/techs/bh-server'),
                {
                    jsAttrName: 'data-bem',
                    jsAttrScheme: 'json'
                }
            ]);

            // HTML
            nodeConfig.addTech(require('enb-bh/techs/html-from-bemjson'));
            nodeConfig.addTarget('?.html');

            // CSS
            nodeConfig.addTech(require('enb/techs/css'));
            nodeConfig.addTarget('?.css');
        });
    });
};
