import './App.scss';

import React from 'react';

function App() {
  return (
    <>
      <p>
        Open your dev-tools to inspect the grid deeply
      </p>
      <div className="example_basic">
        <div className="l-container">
          <div className="l-row">
            <div className="l-col-12">
              l-col-12
            </div>
          </div>
          <div className="l-row">
            <div className="l-col-6">
              l-col-6
            </div>
            <div className="l-col-6">
              l-col-6
            </div>
          </div>
          <div className="l-row">
            <div className="l-col-4">
              l-col-4
            </div>
            <div className="l-col-4">
              l-col-4
            </div>
            <div className="l-col-4">
              l-col-4
            </div>
          </div>
          {/*
          <div className="l-row">
            <div className="l-col-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="l-col-4">
              test
            </div>
            <div className="l-col-4">
              another test
            </div>
          </div>
           */}
          <div className="l-row">
            <div className="l-col-2">
              l-col-2
            </div>
            <div className="l-col-2">
              l-col-2
            </div>
            <div className="l-col-2">
              l-col-2
            </div>
            <div className="l-col-2">
              l-col-2
            </div>
            <div className="l-col-2">
              l-col-2
            </div>
            <div className="l-col-2">
              l-col-2
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
