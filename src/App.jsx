import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Github from "./pages/Github"
// import Post from "./pages/Post"
import SinglePost from "./pages/SinglePost"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/blog/:slug" element={<SinglePost />} />
        <Route path='/github' element={<Github />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
