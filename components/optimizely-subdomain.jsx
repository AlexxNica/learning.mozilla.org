var React = require('react');

var optimizelyActive = process.env.OPTIMIZELY_ACTIVE === 'yes';
var cookieDomain = process.env.FULL_SUBDOMAIN_FOR_COOKIE || 'learning.mozilla.org';

var OptimizelySubdomain = React.createClass({
  cookieScript: function() {
    return {
      __html: [
        "window['optimizely'] = window['optimizely'] || [];",
        "window['optimizely'].push(['setCookieDomain', '" + cookieDomain + "']);"
      ].join('\n')
    };
  },
  render: function() {
    return optimizelyActive ? <script dangerouslySetInnerHTML={this.cookieScript()} /> : false;
  }
});

module.exports = OptimizelySubdomain;
