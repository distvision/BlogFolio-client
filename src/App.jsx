import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Github from "./pages/Github"
import Post from "./pages/Post"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/post" element={<Post />} />
        <Route path='/github' element={<Github />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
