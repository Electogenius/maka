cp src/index.js cli.js
for file in locales/* ; do
	cat $file >> cli.js
done
echo "h();" >> cli.js
