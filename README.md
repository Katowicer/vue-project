# vue-project
Learning Vue, Vue Router, Pinia with a settings UI to change user preferences and data.

Live preview: https://katowicer.github.io/vue-project/

## Node dependencies
```sh
vue-project@0.0.0 
├── pinia-plugin-persistedstate@4.2.0
├── pinia@3.0.1
├── tailwindcss@4.0.9
├── vite@6.2.0
├── vue-router@4.5.0
└── vue@3.5.13
```

Dependencies: 
- [Vite](https://vite.dev/)
- [Vue](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Pinia Persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/)
- [TypeScript](https://www.typescriptlang.org/)


<!-- gen-readme start - generated by https://github.com/jetify-com/devbox/ -->
## Development Environment
[![Built with Devbox](https://www.jetify.com/img/devbox/shield_moon.svg)](https://www.jetify.com/devbox/docs/contributor-quickstart/)
This project uses [devbox](https://github.com/jetify-com/devbox) to manage its development environment.

Install devbox:
```sh
curl -fsSL https://get.jetpack.io/devbox | bash
```

Start the devbox shell:
```sh 
devbox shell
```

Run a script in the devbox environment:
```sh
devbox run <script>
```
## Scripts
Scripts are custom commands that can be run using this project's environment. This project has the following scripts:

* [test](#devbox-run-test)

## Shell Init Hook
The Shell Init Hook is a script that runs whenever the devbox environment is instantiated. It runs 
on `devbox shell` and on `devbox run`.
```sh
test -z $DEVBOX_COREPACK_ENABLED || corepack enable --install-directory "/home/hokkaido/devboxes/Vue/.devbox/virtenv/nodejs/corepack-bin/"
test -z $DEVBOX_COREPACK_ENABLED || export PATH="/home/hokkaido/devboxes/Vue/.devbox/virtenv/nodejs/corepack-bin/:$PATH"
echo 'Welcome to devbox!' > /dev/null
```

## Packages

* [nodejs@23.7.0](https://www.nixhub.io/packages/nodejs)

## Script Details

### devbox run test
```sh
echo "Error: no test specified" && exit 1
```
&ensp;
<!-- gen-readme end -->

## Docker
Spin a docker container via the provided [Dockerfile](./Dockerfile). 
<br />
A [devcontainer environment](./.devcontainer)in also provided.
