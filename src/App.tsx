import { Outlet } from 'react-router-dom'
import './globals.css'


function App() {

  return (
    <main className='flex h-screen'>
      <Outlet/>
    </main>
  )
}

export default App
