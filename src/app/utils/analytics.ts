import ReactGA from 'react-ga4';

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? '';

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const logPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

// Eventos específicos útiles para tu portfolio
export const trackFormSubmit = (formType: 'whatsapp' | 'calendly') => {
  logEvent('Form', 'Submit', formType);
};

export const trackProjectClick = (projectName: string) => {
  logEvent('Project', 'Click', projectName);
};

export const trackWhatsAppClick = () => {
  logEvent('Contact', 'WhatsApp Click', 'Floating Button');
};

export const trackCalendlyClick = () => {
  logEvent('Contact', 'Calendly Click', 'Schedule Meeting');
};
