// Import React and ReactDOM
import __vite__cjsImport0_react from "/@fs/Users/beaubarrier/Documents/GitHub/Beaus-Portfolio-Framework7/node_modules/.vite/react.js?v=4c5a5e92"; const React = __vite__cjsImport0_react.__esModule ? __vite__cjsImport0_react.default : __vite__cjsImport0_react;
import __vite__cjsImport1_reactDom from "/@fs/Users/beaubarrier/Documents/GitHub/Beaus-Portfolio-Framework7/node_modules/.vite/react-dom.js?v=4c5a5e92"; const ReactDOM = __vite__cjsImport1_reactDom.__esModule ? __vite__cjsImport1_reactDom.default : __vite__cjsImport1_reactDom;

// Import Framework7
import Framework7 from '/@fs/Users/beaubarrier/Documents/GitHub/Beaus-Portfolio-Framework7/node_modules/.vite/framework7_lite-bundle.js?v=4c5a5e92';

// Import Framework7-React Plugin
import Framework7React from '/@fs/Users/beaubarrier/Documents/GitHub/Beaus-Portfolio-Framework7/node_modules/.vite/framework7-react.js?v=4c5a5e92';

// Import Framework7 Styles
import '/@fs/Users/beaubarrier/Documents/GitHub/Beaus-Portfolio-Framework7/node_modules/framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '/css/icons.css';
import '/css/app.css?t=1637711066114';

// Import App Component
import App from '/components/app.jsx?t=1637710986755';

// Init F7 React Plugin
Framework7.use(Framework7React)

// Mount React App
ReactDOM.render(
  React.createElement(App),
  document.getElementById('app'),
);