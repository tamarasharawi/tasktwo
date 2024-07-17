
import React from 'react';
import ChildComponent from './child';

function ParentComponent() {
  const data = 'Hello from Parent';

  return (
    <div>
      <ChildComponent data={data} />
    </div>
  );
}

export default ParentComponent;