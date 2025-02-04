# plugin-announcements-dynamic

Welcome to the plugin-announcements-dynamic plugin!

_This plugin was created through the Backstage CLI_

## Exporting as dynamic plugin

```shell
yarn install
yarn tsc
yarn build

npx @janus-idp/cli@latest package export-dynamic-plugin --clean
npx @janus-idp/cli@latest package package-dynamic-plugins --tag quay.io/redhat_na_ssa/rhdh-dynamic-plugins/backstage-community-plugin-announcements-dynamic:0.1.5

podman push quay.io/repository/backstage-community-plugin-announcements-dynamic:0.1.5
backstage-community-plugin-announcements-dynamic
```
