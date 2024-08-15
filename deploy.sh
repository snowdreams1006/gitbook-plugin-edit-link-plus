#! /bin/bash

# copy info
cp -rf README.md docs/en/
cp -rf README_zh.md docs/zh/README.md
cp -rf README_zh.md example/README.md

# status latest
git status

# pull latest 
git pull

# add commits
git add .
# commit 
git commit -m "auto update"
# push to github and others
git push

# prepare for generate docs
cd docs

# re-generate docs
rm -rf _book/ && gitbook build
# copy to docs
cp -rf _book/* ./

# prepare for push 
cd ..

# add commits
git add .
# commit 
git commit -m "auto deploy website"
# push to github and others
git push

# status latest 
git status