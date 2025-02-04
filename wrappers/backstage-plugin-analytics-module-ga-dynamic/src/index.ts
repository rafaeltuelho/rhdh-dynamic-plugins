import { analyticsApiRef, configApiRef, createApiFactory, identityApiRef } from '@backstage/core-plugin-api';
// import { GoogleAnalytics } from '@backstage/plugin-analytics-module-ga';
import { GoogleAnalytics4 } from '@backstage/plugin-analytics-module-ga4';

const GoogleAnalyticsApi = createApiFactory({
  api: analyticsApiRef,
  deps: { configApi: configApiRef, identityApi: identityApiRef },
  factory: ({ configApi, identityApi }) => GoogleAnalytics4.fromConfig(configApi, { identityApi })
});

export { GoogleAnalyticsApi };