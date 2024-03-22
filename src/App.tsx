import { Outlet } from "react-router-dom";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "./context/AuthContext";
import { QueryProvider } from "./lib/react-query/QueryProvider";

function App() {
  return (
    <AuthProvider>
      <QueryProvider>
        <main className="flex h-screen">
          <Toaster />
          <Outlet />
        </main>
      </QueryProvider>
    </AuthProvider>
  );
}

export default App;
