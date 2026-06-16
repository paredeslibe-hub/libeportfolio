import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Portfolio } from './components/Portfolio';
import { LeadCaptureLP } from './components/LeadCaptureLP';
import { NeobankPage } from './components/NeobankPage';
import { ConsultingPage } from './components/ConsultingPage';
import { ComingSoonPage } from './components/ComingSoonPage';
import { PortalCreditosPage } from './components/PortalCreditosPage';
import { PetsAppPage } from './components/PetsAppPage';
import { useLanguage } from './context/LanguageContext';

function NeobankRoute() {
  const { language } = useLanguage();
  return <NeobankPage language={language} />;
}

function ConsultingRoute() {
  const { language } = useLanguage();
  return <ConsultingPage language={language} />;
}

function AiAppRoute() {
  const { language } = useLanguage();
  const titles = { es: 'App con Inteligencia Artificial', en: 'AI-Powered App', pt: 'App com Inteligência Artificial' };
  return <ComingSoonPage projectTitle={titles[language]} projectCategory="Fintech" language={language} />;
}

function PortalCreditosRoute() {
  const { language } = useLanguage();
  return <PortalCreditosPage language={language} />;
}

function PetsAppRoute() {
  const { language } = useLanguage();
  return <PetsAppPage language={language} />;
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', Component: Portfolio },
      { path: '/negocios', element: <LeadCaptureLP /> },
      { path: '/proyectos/neobank', element: <NeobankRoute /> },
      { path: '/proyectos/consulting', element: <ConsultingRoute /> },
      { path: '/proyectos/ai-app', element: <AiAppRoute /> },
      { path: '/proyectos/portal-creditos', element: <PortalCreditosRoute /> },
      { path: '/proyectos/pets-app', element: <PetsAppRoute /> },
    ],
  },
]);
