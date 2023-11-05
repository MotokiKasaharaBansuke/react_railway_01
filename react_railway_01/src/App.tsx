import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import  ThreadList  from './components/ThreadList/ThreadList'
import  NewThread  from './components/NewThread/NewThread'
import PostList from './components/PostList/PostList';


const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <header className="App-header">
        <div className="Header-title">掲示板</div>
        <div className="Header-link">
          <nav>
            <Link to="/new">スレッドを立てる</Link>
          </nav>
        </div>
        </header>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<ThreadList />} />
          <Route path="/new" element={<NewThread />} />
          <Route path="/thread/:id" element={<PostList/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
