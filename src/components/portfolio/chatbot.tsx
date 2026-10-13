import { useEffect } from 'react';

const injectUrl = 'https://cdn.botpress.cloud/webchat/v5.0/inject.js';
const configUrl = 'https://files.bpcontent.cloud/2026/10/13/10/20261013101626-61X4TH35.js';

export function Chatbot() {
  useEffect(() => {
    // Keep the hosted provider's configuration and history behavior unchanged.
    // Load once, in order, after hydration rather than during server rendering.
    if (document.getElementById('botpress-inject')) return;
    const inject = document.createElement('script');
    inject.id = 'botpress-inject';
    inject.src = injectUrl;
    inject.async = true;
    inject.onload = () => {
      if (document.getElementById('botpress-config')) return;
      const config = document.createElement('script');
      config.id = 'botpress-config';
      config.src = configUrl;
      config.defer = true;
      document.body.appendChild(config);
    };
    document.body.appendChild(inject);
  }, []);
  return null;
}