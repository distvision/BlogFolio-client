import { BrowserRouter, Route, Routes } from "react-router-dom"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import SinglePost from "./pages/SinglePost"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/blog/:slug" element={<SinglePost />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
