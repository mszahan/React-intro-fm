# React-intro-fm

Introductory to pure react from FM course

# course website

https://react-v8.holt.courses/

# course Repo

https://github.com/btholt/complete-intro-to-react-v8

# course example projects

https://github.com/btholt/citr-v8-project

# start with

npm init -y

# then install prettier and eslint in dev dependecny

# and add their config file and update package.json for manul fix

npm install --save-dev prettier OR npm i -D prettier
npm i -D eslint
npm i -D eslint-config-prettier

# install vite and react, react should be in production dependency

npm i -D vite@3.1.4 @vitejs/plugin-react@2.1.0
npm i react@18.2.0 react-dom@18.2.0

# add in package.json for dev and build comand under scripts

"dev":"vite",
"build":"vite build",
"preview":"vite preview",
