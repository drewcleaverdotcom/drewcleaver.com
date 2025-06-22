export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const pageview = (url) => {
  if (!GA_MEASUREMENT_ID) return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = ({ action, params }) => {
  if (!GA_MEASUREMENT_ID) return;
  window.gtag('event', action, params);
};
