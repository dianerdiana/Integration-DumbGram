import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes, useNavigate } from "react-router-dom"
import { useContext, useEffect } from 'react';

import Landing from './pages/landing/Landing';
import Feed from './pages/Feed';
import EditProfile from './pages/EditProfile'
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import MessagesMain from './pages/message/MessagesMain';
import Login from './components/login/Login';
import Register from './components/register/Register';

// Get API config & setAuthToken here ...
import { API, setAuthToken } from './config/api';

import { UserContext } from './context/userContext';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  let navigate = useNavigate();
  // let { id } = useParams();
  // id = state.user.id

  // Init user context here ...
  const [state, dispatch] = useContext(UserContext);

  // Redirect Auth here ...
  useEffect(() => {
    // Redirect Auth
    if (state.isLogin == false) {
      navigate('/');
    } else {
      navigate("/feed")
    }
  }, [state]);

   // Create function for check user token here ...
   const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={ <Landing /> } />
        <Route exact path="/edit-profile/:id" element={ <EditProfile /> } />
        <Route exact path="/create-post" element={ <CreatePost /> } />
        <Route exact path="/user/:id" element={ <Profile /> } />
        <Route exact path="/explore" element={ <Explore /> } />
        <Route exact path="/messages" element={ <MessagesMain /> } />
        <Route exact path="/feed" element={ <Feed /> } />
        <Route exact path="/login" element={ <Login show={true}/> } />
        <Route exact path="/register" element={ <Register show={true}/> } />
      </Routes>
    </div>
  );
}

export default App;