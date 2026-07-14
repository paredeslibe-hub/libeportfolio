import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Portfolio } from './components/Portfolio';
import { CarouselPreview } from './components/CarouselPreview';
import { LeadCaptureLP } from './components/LeadCaptureLP';
import { RealEstateLP } from './components/RealEstateLP';
import { NeobankPage } from './components/NeobankPage';
import { ConsultingPage } from './components/ConsultingPage';
import { AiAppPage } from './components/AiAppPage';
import { DesignSystemPage } from './components/DesignSystemPage';
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
  return <AiAppPage language={language} />;
}

function DesignSystemRoute() {
  const { language } = useLanguage();
  return <DesignSystemPage language={language} />;
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
      { path: '/imobiliario', element: <RealEstateLP /> },
      { path: '/proyectos/neobank', element: <NeobankRoute /> },
      { path: '/proyectos/consulting', element: <ConsultingRoute /> },
      { path: '/proyectos/ai-app', element: <AiAppRoute /> },
      { path: '/proyectos/design-system', element: <DesignSystemRoute /> },
      { path: '/proyectos/portal-creditos', element: <PortalCreditosRoute /> },
      { path: '/proyectos/pets-app', element: <PetsAppRoute /> },
      { path: '/carousel-preview', element: <CarouselPreview /> },
    ],
  },
]);
