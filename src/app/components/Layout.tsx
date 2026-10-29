import { useEffect } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router';
import { logPageView } from '../utils/analytics';
import { applyRouteSeo, getRouteSeo } from '../seo';

export function Layout() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Registrar cada cambio de página
    logPageView(location.pathname + location.search);
  }, [location]);

  useEffect(() => {
    // Título, descripción y canonical de la ruta (los mismos que trae su HTML pre-renderizado)
    applyRouteSeo(getRouteSeo(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    // Al entrar a una página nueva, empezar arriba (al volver atrás, el navegador restaura la posición)
    if (navigationType !== 'POP') window.scrollTo(0, 0);
  }, [location.pathname]);

  return <Outlet />;
}
