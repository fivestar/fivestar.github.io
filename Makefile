.PHONY: build
build:
	@bundle install

.PHONY: serve
serve:
	@bundle exec jekyll serve