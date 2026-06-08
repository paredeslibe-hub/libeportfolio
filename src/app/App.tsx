import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { initGA } from './utils/analytics';

export default function App() {
  useEffect(() => {
    // Inicializar Google Analytics una sola vez
    initGA();
  }, []);

  return <RouterProvider router={router} />;
}
