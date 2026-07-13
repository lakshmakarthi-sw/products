import { useEffect } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ProductPage from '../features/products/ProductPage';
import Footer from '../components/Footer';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from './queryClient';
import { useApp } from './AppProvider';

function App() {
 const { isToggled } = useApp();

 useEffect(() => {
    const event = window.addEventListener('resize', () => {
      if (480 < window.innerWidth && window.innerWidth <= 768) {
        setIsToggled(false);
      } else {
        setIsToggled(true);
      }
    });

    return () => {
      window.removeEventListener('resize', event);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="layout">
        <Header title="Products" />
        {isToggled && <SideBar />}
        <ProductPage />
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App;
