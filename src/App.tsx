import React from 'react';
import './App.css';
import PageHeader from './components/page-header/index'
import PageContent from './components/content/index'
function App() {
  return (
    <div className="App max-w-3xl mx-auto">
      <PageHeader/>
      <PageContent/>
    </div>
  );
}

export default App;
