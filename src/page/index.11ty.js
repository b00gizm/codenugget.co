const { html } = require('htm/react');
const { renderToString } = require('react-dom/server');

const { Content } = require('./Content');

module.exports = class Page {
  data() {
    return {
      title: 'My title',
      layout: 'layout.njk',
    };
  }

  render(data) {
    return renderToString(html`<${Content} />`);
  }
};