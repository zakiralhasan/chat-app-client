
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import './sass/global.css'
import ChattingPage from './pages/ChattingPage';
import JoinPage from './pages/JoinPage';

// create route for joining and chatting pages
const router = createBrowserRouter([
  { path: '/', element: <JoinPage></JoinPage> },
  { path: 'join', element: <JoinPage></JoinPage> },
  { path: 'chat', element: <ChattingPage></ChattingPage> }
])

function App() {

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
