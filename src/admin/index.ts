
import './app.css';

export default {
  register(app: any) {
    app.customFields.register({
      name: 'readonly-url-path',
      pluginId: 'admin',
      type: 'string',
      intlLabel: {
        id: 'readonly-url-path.label',
        defaultMessage: 'Read-only URL Path',
      },
      intlDescription: {
        id: 'readonly-url-path.description',
        defaultMessage: 'Automatically generated full URL path',
      },
      components: {
        Input: async () => import('./overrides/readonly-url-path'),
      },
      options: {
        base: {},
        advanced: {},
      },
    });
  },

  bootstrap(app: any) {
    // Bootstrap code if needed
  },
};