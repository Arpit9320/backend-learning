import { Route, Routes } from "react-router-dom"
import CreatePost from "./pages/CreatePost"
import FeedPage from "./pages/FeedPage"

const App = () => {
  return (
    <div className="bg-[#c6c6c6] min-h-screen w-full">
      <Routes>
        <Route path = "/" element={<CreatePost/>}/>
        <Route path = "/Feeds" element={<FeedPage/>}/>
      </Routes>
    </div>
  )
}

export default App
