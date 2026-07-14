import { lazy, Suspense, useEffect } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ProductPage from '../features/products/ProductPage';
import Footer from '../components/Footer';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from './queryClient';
import { useApp } from './AppProvider';
import { Route, Routes } from 'react-router';

const MessagePage = lazy(() => import('../components/Message'));

function App() {
  const { isToggled, handleToggle } = useApp();

  useEffect(() => {
    const event = window.addEventListener('resize', () => {
      if (navigator.userAgentData.mobile) {
        handleToggle(false);
      } else {
        handleToggle(true);
      }
    });

    return () => {
      window.removeEventListener('resize', event);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<MessagePage content="Loading" />}>
        <Routes>
          <Route path='/' element={<div className="layout">
            <Header title="Products" />
            {isToggled && <SideBar />}
            <ProductPage />
            <Footer />
          </div>} />
          <Route path='*' element={<MessagePage  content="Page Not Found" />} />
        </Routes>
      </Suspense>
    </QueryClientProvider>
  )
}

export default App;
