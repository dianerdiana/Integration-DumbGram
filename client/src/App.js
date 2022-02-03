import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Landing from './pages/landing/Landing';
import Feed from './pages/Feed';
import EditProfile from './pages/EditProfile'
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import MessagesMain from './pages/message/MessagesMain';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={ <Landing /> } />
          <Route exact path="/edit-profile" element={ <EditProfile /> } />
          <Route exact path="/create-post" element={ <CreatePost /> } />
          <Route exact path="/profile" element={ <Profile /> } />
          <Route exact path="/explore" element={ <Explore /> } />
          <Route exact path="/messages" element={ <MessagesMain /> } />
          <Route exact path="/feed" element={ <Feed /> } />
          <Route exact path="/login" element={ <Login show={true}/> } />
          <Route exact path="/register" element={ <Register show={true}/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;