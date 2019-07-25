install: npm install

start:
	npx babel-node src/bin/brain-calc.js

publish:
	publish --dry-run
lint:
	npx eslint .
