import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Portfolio } from './components/Portfolio';
import { LeadCaptureLP } from './components/LeadCaptureLP';
import { NeobankPage } from './components/NeobankPage';
import { ConsultingPage } from './components/ConsultingPage';
import { ComingSoonPage } from './components/ComingSoonPage';
import { PortalCreditosPage } from './components/PortalCreditosPage';
import { PetsAppPage } from './components/PetsAppPage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        Component: Portfolio,
      },
      {
        path: '/negocios',
        element: <LeadCaptureLP />,
      },
      {
        path: '/proyectos/neobank',
        element: <NeobankPage language="es" />,
      },
      {
        path: '/proyectos/consulting',
        element: <ConsultingPage language="es" />,
      },
      {
        path: '/proyectos/ai-app',
        element: (
          <ComingSoonPage
            projectTitle="App con Inteligencia Artificial"
            projectCategory="Fintech"
            language="es"
          />
        ),
      },
      {
        path: '/proyectos/portal-creditos',
        element: <PortalCreditosPage language="es" />,
      },
      {
        path: '/proyectos/pets-app',
        element: <PetsAppPage language="es" />,
      },
    ],
  },
]);
