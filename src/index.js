import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
// import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
  
import TEST from './test';
import LIST from './list';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
       <TEST />
       <LIST />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
  
// serviceWorker.unregister();