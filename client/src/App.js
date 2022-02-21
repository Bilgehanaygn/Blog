import MyAppBar from './components/MyAppBar';
import MainPage from './components/MainPage';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ContextValue } from "./context/Context";
import { fetchPosts } from './api/index';
import { useEffect } from 'react';
import types from './actions/types';
import PostDetails from './components/PostDetails';
import './App.css';

function App() {
  const [{articles}, dispatch] = ContextValue();
  useEffect(()=>{
    fetchPosts().then((response)=>{
      if(response){
        dispatch({
          type:types.FETCH_POSTS,
          payload:response.data.data
        });
      }
    });
  },[dispatch]);
  

  return (
    

    <div className="App">
      
      <MyAppBar />
      <Router>
        <Routes>
          <Route path="/articles" element={<MainPage/>}/>
          <Route path="/articles/:id" element={<PostDetails />} />
          <Route path="*" element={<Navigate to="/articles" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
