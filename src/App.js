import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import NotFound404 from "./components/NotFound404/NotFound404";
import Questions from "./components/Questions/Questions";
import Stats from "./components/Stats/Stats";
import Topics from "./components/Topics/Topics";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/topics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Topics></Topics>,
        },
        {
          path: "/stats",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Stats></Stats>,
        },
        {
          path: "/blogs",
          element: <Blog></Blog>,
        },
        {
          path: "topics/:topicId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
            );
          },
          element: <Questions></Questions>,
        },
      ],
    },
    {
      path: "/*",
      element: <NotFound404></NotFound404>,
    },
  ]);
  return (
    <div className="bg-slate-900">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
