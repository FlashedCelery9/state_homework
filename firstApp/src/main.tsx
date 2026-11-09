import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {AuthProvider} from "./contexts/AuthProvider.tsx";
import {ThemeProvider} from "./contexts/ThemeProvider.tsx";
import {LanguageProvider} from "./contexts/LanguageProvider.tsx";
import {CoursesProvider} from "./contexts/CoursesProvider.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider>
          <ThemeProvider>
              <LanguageProvider>
                  <CoursesProvider>
                      <App />
                  </CoursesProvider>
              </LanguageProvider>
          </ThemeProvider>
      </AuthProvider>
  </StrictMode>,
)
