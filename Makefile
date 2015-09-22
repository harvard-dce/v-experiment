run:
	wzrd index.js -- -d -t babelify

test:
	node tests/basictests.js

pushall:
	git push origin master && git push origin gh-pages
