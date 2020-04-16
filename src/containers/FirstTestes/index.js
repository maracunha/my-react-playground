import React from 'react';

import Count from './Count';
import List from './List';
import List2 from './List2';
import Contador from './Contador';

function FirstTestes() {
  return (
    <>
      <div>
        <Count initialCount={1} />
        <p>-------------</p>
        <List />
        <p>-------------</p>
        <List2 />
      </div>
      <div>
        <Contador numeroInicial={10} />
      </div>
    </>
  );
}

export default FirstTestes;
