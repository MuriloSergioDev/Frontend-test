import { Toaster } from 'react-hot-toast'
import Routes from './Routes'
import { AuthProvider } from './contexts/auth'

function App() {

  return (
    <AuthProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes />
    </AuthProvider>
  )
}

export default App
