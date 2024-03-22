import App from "@/App";
import AuthLayout from "@/_auth/AuthLayout";
import SignupForm from "@/_auth/forms/SignupForm";
import SigninForm from "@/_auth/forms/SigninForm";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/_root/RootLayout";
import Explore from "@/_root/pages/Explore";
import Saved from "@/_root/pages/Saved";
import AllUsers from "@/_root/pages/AllUsers";
import CreatePost from "@/_root/pages/CreatePost";
import EditPost from "@/_root/pages/EditPost";
import PostDetails from "@/_root/pages/PostDetails";
import Profile from "@/_root/pages/Profile";
import UpdateProfile from "@/_root/pages/UpdateProfile";
import LikedPosts from "@/_root/pages/LikedPosts";
import { Home } from "@/_root/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        /*Public Routes*/
        element: <AuthLayout />,
        children: [
          { path: "sign-in", element: <SigninForm /> },
          { path: "sign-up", element: <SignupForm /> },
        ],
      },
      {
        /*Private Routes*/
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> }, 
          { path: 'explore', element: <Explore/>},
          { path: 'saved', element: <Saved/>},
          { path: 'all-users', element: <AllUsers/>},
          { path: 'create-post', element: <CreatePost/>},
          { path: 'update-post/:id', element: <EditPost/>},
          { path: 'posts/:id', element: <PostDetails/>},
          { path: 'profile/:id/*', element: <Profile/>},
          { path: 'update-profile/:id', element: <UpdateProfile/>},
          { path: 'liked-posts', element: <LikedPosts/>}
        ],
      },
    ],
  },
]);