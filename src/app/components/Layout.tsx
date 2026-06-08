import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { logPageView } from '../utils/analytics';

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Registrar cada cambio de página
    logPageView(location.pathname + location.search);
  }, [location]);

  return <Outlet />;
}
