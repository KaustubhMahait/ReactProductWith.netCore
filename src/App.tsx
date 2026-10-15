import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import AppRoutes from "./routes/AppRoutes";
import { LoginTypeProvider } from "./context/LoginTypeContext";


function App() {

  return (
            <LoginTypeProvider>
                <AppRoutes />
            </LoginTypeProvider>
  );

}

export default App
