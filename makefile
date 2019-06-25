# Paths
build := typescript/tsconfig.build.json
dev := typescript/tsconfig.dev.json

# NPX functions
tsc := node_modules/.bin/tsc
ts_node := node_modules/.bin/ts-node
mocha := node_modules/.bin/mocha

# Docker
image_name := avatar
image_tag := avatar
image_repo := sudoo/avatar

.IGNORE: clean-linux kill stop

main: run

dev:
	@echo "[INFO] Building for development"
	@NODE_ENV=development $(tsc) --p $(dev)

run: dev
	@echo "[INFO] Starting"
	@NODE_ENV=development \
	node app/index.js

build:
	@echo "[INFO] Building for production"
	@NODE_ENV=production $(tsc) --p $(build)

tests:
	@echo "[INFO] Testing with Mocha"
	@NODE_ENV=test $(mocha)

cov:
	@echo "[INFO] Testing with Nyc and Mocha"
	@NODE_ENV=test \
	nyc $(mocha)

install:
	@echo "[INFO] Installing dev Dependencies"
	@yarn install --production=false

install-prod:
	@echo "[INFO] Installing Dependencies"
	@yarn install --production=true

clean-linux:
	@echo "[INFO] Cleaning dist files"
	@rm -rf coverage

docker: build
	@echo "[INFO] Create docker image"
	@docker build -t $(image_name) -f Dockerfile ./

host: stop
	@echo "[INFO] Hosting docker image"
	@docker run -it -p 8080:8080 --name $(image_name) $(image_tag)

kill:
	@echo "[INFO] Killing docker image"
	@docker kill $(image_tag)

stop: kill
	@echo "[INFO] Stopping docker image"
	@docker rm $(image_tag)

tag:
	@echo "[INFO] Mark docker tag"
	@docker tag $(image_name) $(image_repo):1.0.0

publish: stop tag
	@echo "[INFO] Publish docker image"
	@docker push $(image_repo):1.0.0
