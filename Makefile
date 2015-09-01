run:
	wzrd index.js

test:
	node tests/basictests.js

pushall:
	git push origin master && git push origin gh-pages
