import { Outlet } from "react-router-dom";
import "./globals.css";
import { ToastContainer} from 'react-toastify';
import AuthProvider from "./context/AuthContext";
import { QueryProvider } from "./lib/react-query/QueryProvider";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <QueryProvider>
        <main className="flex h-screen">
          <ToastContainer
            position="top-left"
            autoClose={3000}
            closeOnClick
            theme="dark"
          />
          <Outlet />
        </main>
      </QueryProvider>
    </AuthProvider>
  );
}

export default App;
