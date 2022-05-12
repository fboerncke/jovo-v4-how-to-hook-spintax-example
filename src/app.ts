import { GoogleAssistantPlatform } from '@jovotech/platform-googleassistant';
import { AlexaPlatform } from '@jovotech/platform-alexa';
import { App } from '@jovotech/framework';
import { spintaxProcessor } from './hooks/spintaxHook';

import en from './i18n/en.json';
import de from './i18n/de.json';

import { GlobalComponent } from './components/GlobalComponent';


const app = new App({
  i18n: {
    resources: {
      en,
      de,
    },
  },
  components: [GlobalComponent],
  plugins: [
    new GoogleAssistantPlatform(),
    new AlexaPlatform(),
  ],
});

// activate the hook
app.hook('before.response.output', spintaxProcessor);

export { app };
