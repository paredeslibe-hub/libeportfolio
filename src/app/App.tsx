import { useEffect, Component, ReactNode } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { initGA } from './utils/analytics';
import { LanguageProvider } from './context/LanguageContext';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('App error caught by boundary:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Algo salió mal</h1>
          <p className="text-gray-500 mb-6">Por favor recarga la página para continuar.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
          >
            Recargar
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ErrorBoundary>
  );
}
