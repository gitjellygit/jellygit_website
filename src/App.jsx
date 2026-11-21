import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx';

import IndexPage from './pages/index.jsx';
import AboutPage from './pages/about.jsx';
import BlogPage from './pages/blog.jsx';
import Blog1Page from './pages/blog-1.jsx';
import Blog2Page from './pages/blog-2.jsx';
import Blog3Page from './pages/blog-3.jsx';
import Blog4Page from './pages/blog-4.jsx';
import Blog5Page from './pages/blog-5.jsx';
import Blog6Page from './pages/blog-6.jsx';
import BrandingPage from './pages/branding.jsx';
import BusinessTechnologyServicesPage from './pages/business-technology-services.jsx';
import CmsdevelopmentServicesPage from './pages/cmsdevelopment-services.jsx';
import ContactPage from './pages/contact.jsx';
import DesignServicesPage from './pages/design-services.jsx';
import DigitalMarketingServicesPage from './pages/digital-marketing-services.jsx';
import DigitalTransformationServicesPage from './pages/digital-transformation-services.jsx';
import MobilityServicesPage from './pages/mobility-services.jsx';
import PortfolioPage from './pages/portfolio.jsx';
import ProductEngineeringServicesPage from './pages/product-engineering-services.jsx';
import ProductsPage from './pages/products.jsx';
import QatServicesPage from './pages/qat-services.jsx';
import ServicesPage from './pages/services.jsx';
import StaffingsolutionPage from './pages/staffingsolution.jsx';
import TeamPage from './pages/team.jsx';
import TechnologyConsultancyServicesPage from './pages/technology-consultancy-services.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/index', element: <IndexPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/blog-1', element: <Blog1Page /> },
      { path: '/blog-2', element: <Blog2Page /> },
      { path: '/blog-3', element: <Blog3Page /> },
      { path: '/blog-4', element: <Blog4Page /> },
      { path: '/blog-5', element: <Blog5Page /> },
      { path: '/blog-6', element: <Blog6Page /> },
      { path: '/branding', element: <BrandingPage /> },
      { path: '/business-technology-services', element: <BusinessTechnologyServicesPage /> },
      { path: '/cmsdevelopment-services', element: <CmsdevelopmentServicesPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/design-services', element: <DesignServicesPage /> },
      { path: '/digital-marketing-services', element: <DigitalMarketingServicesPage /> },
      { path: '/digital-transformation-services', element: <DigitalTransformationServicesPage /> },
      { path: '/mobility-services', element: <MobilityServicesPage /> },
      { path: '/portfolio', element: <PortfolioPage /> },
      { path: '/product-engineering-services', element: <ProductEngineeringServicesPage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/qat-services', element: <QatServicesPage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/staffingsolution', element: <StaffingsolutionPage /> },
      { path: '/team', element: <TeamPage /> },
      { path: '/technology-consultancy-services', element: <TechnologyConsultancyServicesPage /> },
      { path: '*', element: <IndexPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
