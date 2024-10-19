import { lazy,Suspense } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';

function App() {
  const Hm=lazy(()=>import('./components/Home'));
  const Ab=lazy(()=>import('./components/about'));
  const Cm=lazy(()=>import('./components/contact'));
  return (
    
    <div>
    <Suspense fallback={<div>Loading......</div>}>
      <Routes>
        <Route path='/' element={<Hm/>}/>
        <Route path='/About' element={<Ab/>}/>
        <Route path='/Contact' element={<Cm/>}/>
        </Routes>
    </Suspense>
    </div>
  );
}

export default App;
