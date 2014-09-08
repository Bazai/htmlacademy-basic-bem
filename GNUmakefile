NPM_BIN = $(shell npm bin)
NODE_MODULES = $(shell npm root)
BOWER_COMPONENTS = $(PWD)/bower_components
BOWER = $(NPM_BIN)/bower
ENB = $(NPM_BIN)/enb
JSHINT = $(NPM_BIN)/jshint
JSCS = $(NPM_BIN)/jscs
CSSCOMB = $(NPM_BIN)/csscomb

WITH_B_FLAG = $(if $(findstring B,$(MAKEFLAGS)),YES,)
ENB_NO_CACHE = $(if $(WITH_B_FLAG),--no-cache,)

.PHONY: build
build:: $(NODE_MODULES)
build:: .git/hooks/pre-commit
build:: enb-make

### Установка npm-зависимостей
$(NODE_MODULES):
	$(info ===> Installing npm packages)
	@npm install

$(BOWER_COMPONENTS): $(NODE_MODULES)
	$(info ===> Installing bower dependencies)
	@$(BOWER) install

.PHONY: enb-make
enb-make: $(NODE_MODULES) $(BOWER_COMPONENTS)
	$(info ===> Building pages)
	@$(ENB) make $(ENB_NO_CACHE)

.PHONY: watch
watch: $(NODE_MODULES) $(BOWER_COMPONENTS)
	$(info ===> Starting ENB server)
	@$(ENB) server

### Прекоммит-хуки
.git/hooks/pre-commit:
	$(info ===> Adding pre-commit hook)
	@ln -sfn $(PWD)/.githooks/pre-commit $(PWD)/.git/hooks

### Проверка код-стайла

# Файлы

JSFILES ?= $(shell find $(PWD) -not -path '$(NODE_MODULES)/*' -and -not -path '$(BOWER_COMPONENTS)/*' -name '*.js')
CSSFILES ?= $(shell find $(PWD) -not -path '$(NODE_MODULES)/*' -and -not -path '$(BOWER_COMPONENTS)/*' -name '*.css')

.PHONY: test jshint jscs csscomb csscomblint
test: jshint jscs csscomblint

jshint: $(NODE_MODULES)
	$(info ===> Linting JS files using JSHint)
	@$(JSHINT) -c $(PWD)/.jshintrc $(JSFILES)

jscs: $(NODE_MODULES)
	$(info ===> Linting JS files using jscs)
	@$(JSCS) -c $(PWD)/.jscs.json $(JSFILES)

csscomblint: $(NODE_MODULES)
	$(info ===> Linting CSS files using csscomb)
	@$(CSSCOMB) -c $(PWD)/.csscomb.json -l $(CSSFILES)

### Форматирование кода

csscomb: $(CSSCOMB)
	$(info ===> Processing CSS files using csscomb)
	@$(CSSCOMB) $(CSSFILES)
