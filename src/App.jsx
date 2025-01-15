import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/Homepage"
import ChiSiamo from "./components/Chisiamo"
import { PostList } from "./components/Postlist"
import AppLayout from "./components/App.layout"
import PostDetail from "./components/PostDetail"
import GlobalContext from "./contexts/GlobalContext";

function App() {
  return (
    <>
      <GlobalContext.Provider value={globalProviderValue}>
        <Router>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/ChiSiamo" element={<ChiSiamo />} />
              <Route path="/PostList">
                <Route index element={<PostList />} />
                <Route path=":id" element={<PostDetail />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </GlobalContext.Provider>
    </>
  )
}

export default App;