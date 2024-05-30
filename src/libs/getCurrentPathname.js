// getCurrentPathname.js

export const getCurrentPathname = () => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    } else {
      // Handle the case when window is not available (e.g., during server-side rendering)
      return '';
    }
  };
  