import { BrowserRouter, Route, Routes } from "react-router-dom"
import Blog from "./pages/Blog"
import Contacts from "./pages/Contacts"
import Home from "./pages/Home"
import NavAndFooter from "./pages/NavAndFooter"
import SinglePost from "./pages/SinglePost"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavAndFooter />} >
          <Route index element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/blog/:slug" element={<SinglePost />} />
          <Route path='/contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
