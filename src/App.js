import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import NotFound404 from "./components/NotFound404/NotFound404";
import Stats from "./components/Stats/Stats";
import Topics from "./components/Topics/Topics";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/topics', 
          element: <Topics></Topics>
        },
        {
          path: '/stats',
          element: <Stats></Stats>
        },
        {
          path: '/blogs',
          element: <Blog></Blog>
        }
      ],
    },
    {
      path: "*",
      element: <NotFound404
      ></NotFound404>,
    },
  ]);
  return <div className="App">
    <RouterProvider router={router}></RouterProvider>
  </div>;
}

export default App;
