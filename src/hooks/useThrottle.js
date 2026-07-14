// useThrottle.js
import { useRef, useCallback } from 'react';

export function useThrottle(callback, delay = 200) {
  const lastCall = useRef(0);

  return useCallback((...args) => {
    const now = Date.now();
    
    // Only execute if enough time has passed since the last execution
    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      callback(...args);
    }
  }, [callback, delay]);
}