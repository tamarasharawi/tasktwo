import React from 'react';
import ParentComponent from './props/parents';
import Person1 from './higher-order/Person1';
import Parson2 from './higher-order/Parson2';



const App = () => {
  return (
    <div className="App">
      <ParentComponent />
      <Person1 />
      <Parson2 />
     

     
    </div>
  );
};

export default App;
