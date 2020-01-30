import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact 
        nameavatar= 'https://randomuser.me/api/portraits/women/77.jpg'
        name= 'Beth Collins'
        online
      />
      <Contact 
        nameavatar= 'https://randomuser.me/api/portraits/men/74.jpg'
        name= 'Marvin Anderson'
      />
      <Contact 
        nameavatar= 'https://randomuser.me/api/portraits/women/67.jpg'
        name= 'Leona Knight'
        online
      />
    </div>
  );
}


export default App;