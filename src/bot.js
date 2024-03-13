import React, { useEffect } from 'react';

function Chatbot() {
  useEffect(() => {
    const initLandbot = () => {
      if (!window.myLandbot) {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.addEventListener('load', () => {
          window.myLandbot = new window.Landbot.Popup({
            configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2154952-F1VKKA8SE7V53CH5/index.json',
          });
        });
        s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
        const x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      }
    };

    // Attach event listeners to trigger initLandbot
    window.addEventListener('mouseover', initLandbot, { once: true });
    window.addEventListener('touchstart', initLandbot, { once: true });

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('mouseover', initLandbot);
      window.removeEventListener('touchstart', initLandbot);
    };
  }, []);

  return null; // Render nothing, as this component is only responsible for initialization
}

export default Chatbot;
