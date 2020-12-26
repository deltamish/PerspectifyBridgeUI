import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/icon.svg';
import Editor from './components/shared/node-editor/basiceditor';
import Scene from './components/shared/render/basic3d';

const Hello = () => {
  return (
    <div>
      <div
        style={{
          textAlign: 'left',
          width: '100vw',
          height: '70vh',
          resize: 'vertical',
        }}
      >
        <Editor />
      </div>
      <div style={{ textAlign: 'left', width: '100vw', height: '70vh' }}>
        <Scene />
      </div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
