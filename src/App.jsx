import Navbar from './components/Navbar';
import Home from './pages/Home';
import WarningModal from './components/WarningModal';
import { useState } from 'react';



function App() {

const [isWarningModalOpen, setIsWarningModalOpen] = useState(true);

  return (
    <>
    <div className='max-sm:container max-sm:mx-auto'>
    <Navbar />
    <Home />
    {isWarningModalOpen && (
          <WarningModal onClose={() => setIsWarningModalOpen(false)} />
        )}
    </div>
      
    </>
  )
}

export default App;
