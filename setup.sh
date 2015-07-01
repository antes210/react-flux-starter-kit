bash ./lib/mtn install
mv ./app ../../
mv ./docs ../../
mv ./lib ../../
mv ./public ../../
echo node_modules > ../../.gitignore 
mv ./gulpfile.js ../../
mv ./package_new.json ../../package.json
rm -r ../../node_modules