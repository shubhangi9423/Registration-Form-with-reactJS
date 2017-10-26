import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
//import FormPage from './FormPage';
import MultiBalviharPage from './BalviharPage';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <MultiBalviharPage />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
