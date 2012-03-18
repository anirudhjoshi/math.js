 #!/bin/bash

cd math.js
cp -r build ~/
git checkout gh-pages
cp -r ~/build/* ./ 
git add *
git commit -am "Updated gh-pages"
git push origin gh-pages
git checkout master
