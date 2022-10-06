import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import SpeakerList from './components/SpeakerList';

function App() {
  return (
    <div className='ui container'>
      <Header />
      <SpeakerList />
      <Footer />
    </div>
  );
}

export default App;
