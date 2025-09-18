import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Books from './pages/Books'
import BookDetail from './pages/BookDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/books/:id' element={<BookDetail />} />
      </Routes>
    </>
  )
}

export default App
