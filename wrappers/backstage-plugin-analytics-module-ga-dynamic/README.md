# analytics-module-ga-dynamic

This is a **wrapper** for the backstage [analytics-module-ga](https://github.com/backstage/backstage/tree/master/plugins/analytics-module-ga) plugin created to be dynamically loaded in the [**Red Hat Developer Hub**](https://www.redhat.com/en/technologies/cloud-computing/developer-hub).

The dynamic plugins mechanism introduced by Red Hat Developer Hub (Enterprise version of the janus-idp.io project) is documented [here](https://github.com/janus-idp/backstage-showcase/blob/main/showcase-docs/dynamic-plugins.md).

## Loading this dynamic plugin into your RHDH instance

Add the following entry under the `global.plugins` inside the RHDH Helm Chart values yaml and upgrade the chart.

```yaml
#...
		- package: '@rafaeltuelho/backstage-plugin-analytics-module-ga-dynamic@0.1.6' #GA4
		  integrity: >-
		      sha512-S8h0s3Q2sZ99a2PmitJgp8DDKIMo5YvBYz61ULOFgjredJB3+s+irwjRoiqmi+yTYfeiIHggcZwFE2Uhbola8Q==
		  disabled: false
	      pluginConfig:
	        dynamicPlugins:
	          frontend:
	            rafaeltuelho.backstage-plugin-analytics-module-ga-dynamic:
	              apiFactories:
	                - importName: GoogleAnalyticsApi
          app:
            analytics:
              ga4:
                debug: true
                measurementId: G-999AAA99AA
#...
```

After adding the above entry in the RHDH helm chart values, you should be able to check if the plugin has been loaded properly by inspecting the `install-dynamic-plugins` container's log output. You should see something like:

```
======= Installing dynamic plugin @rafaeltuelho/backstage-plugin-analytics-module-ga-dynamic
==> Grabbing package archive through `npm pack`
==> Verifying package integrity
==> Removing previous plugin directory /dynamic-plugins-root/rafaeltuelho-backstage-plugin-analytics-module-ga-dynamic-0.1.0
==> Extracting package archive /dynamic-plugins-root/rafaeltuelho-backstage-plugin-analytics-module-ga-dynamic-0.1.0.tgz
Skipping directory entry package
Skipping directory entry package/dist
Skipping directory entry package/dist-scalprum
Skipping directory entry package/src
Skipping directory entry package/dist-scalprum/static
==> Removing package archive /dynamic-plugins-root/rafaeltuelho-backstage-plugin-analytics-module-ga-dynamic-0.1.0.tgz
==> Successfully installed dynamic plugin @rafaeltuelho/backstage-plugin-analytics-module-ga-dynamic
```

## Minimal config

To configure the plugin to start sending data to GA add the following snippet in your RHDH `app-config` Config Map

```
app:
  analytics:
    ga4:
      debug: true
      measurementId: G-999AAA99AA
```

For additional config consult the [upstream plugin readme file](backstage [analytics-module-ga](https://github.com/backstage/backstage/tree/master/plugins/analytics-module-ga4)