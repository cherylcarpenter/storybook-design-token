import '../src/styles/main.css';

const cssReq = require.context('!!raw-loader!../src', true, /.+\.css$/);
const cssTokenFiles = cssReq.keys().map(function (filename) {
  return {
    filename: filename,
    content: cssReq(filename).default
  };
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  designToken: {
    files: {
      css: cssTokenFiles
    },
    options: {
      hideMatchingHardCodedValues: false
    }
  }
};
