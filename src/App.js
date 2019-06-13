import './App.scss';

import React from 'react';

function App() {
  return (
    <>
      <p>
        Open your dev-tools to inspect the grid deeply
      </p>
      <div className="example_basic">
        <p>Grid 2x2</p>
        <div className="grid-2-2">
          <div>1/1</div>
          <div>1/2</div>
          <div>2/1</div>
          <div>2/2</div>
        </div>
        <p>Grid 2x2 with 10px of gutter</p>
        <div className="grid-2-2-gutter-10">
          <div>1/1</div>
          <div>1/2</div>
          <div>2/1</div>
          <div>2/2</div>
        </div>
        <p>Grid advanced example</p>
        <div className="grid-2-4">
          <div className="huge-element">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="bottom-element">
            test
          </div>
          <div className="top-element">
            another test
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
