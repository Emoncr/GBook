import { } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import PostDetails from './Components/Post Detalis/PostDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './Components/Error/Error'

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Body/>} />
        <Route exact path='/posts' element={<Body/>}/>
        <Route exact path='/posts/:postId' element={<PostDetails />}/>
        <Route exact path='*' element={<Error/>}/>         
      </Routes>
    </BrowserRouter>
  )
}

export default App
