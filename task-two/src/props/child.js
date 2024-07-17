import React from 'react';
import GrandchildComponent from './grandchild';

function ChildComponent(props) {
  return (
    <div>
      <GrandchildComponent data={props.data} />
    </div>
  );
}

export default ChildComponent;