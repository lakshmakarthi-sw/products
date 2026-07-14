import { useEffect } from 'react';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from './queryClient';
import { useApp } from './AppProvider';
import { RouterProvider } from 'react-router';
import router from './routes';

function App() {
  const { handleToggle } = useApp();

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
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </QueryClientProvider>
  )
}

export default App;
