(function (window) {
  window.__env = window.__env || {};

  // Defaults (safe fallback)
  window.__env.API_URL = 'http://localhost:8080/api';
  window.__env.PRODUCTION = false;
  window.__env.OTHER_FLAG = '';

})(this);
