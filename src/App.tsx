import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import StoryOverview from './pages/StoryOverview';
import EditNode from './pages/EditNode';
import Home from './pages/Home';
import * as StoryService from './services/StoryService';

export default function App() {
  const [storyState, updateStoryState] = React.useState(StoryService.getStory());
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/overview">Overview</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<StoryOverview story={storyState} />} />
          <Route path="/node/edit/:nodeId" element={<EditNode  />} />
		  <Route path="/node/edit" element={<EditNode />} />
        </Routes>
      </div>
    </Router>
  );
}