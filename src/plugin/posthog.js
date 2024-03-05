// src/plugins/posthog.js
import posthog from "posthog-js";

export default {
  install(app, options) {
    app.config.globalProperties.$posthog = posthog.init(
      "phc_qpdd7TwB1W9VEQ5LxFMquZL85bh7EOapMbvi4siknDs",
      {
        api_host: "https://app.posthog.com",
      }
    );
  },
};