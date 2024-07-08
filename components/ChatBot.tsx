'use client'
import { useEffect } from 'react';

export const ChatBot = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.onload = function () {
          window.voiceflow.chat.load({
            verify: { projectID: '6679f40a7e52e6455e8f7a07' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
          });
        };
        script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
        script.type = 'text/javascript';
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
    <p className='fixed bottom-[80px] right-[50px] rotate-[-45deg] text-center text-lg'>Prueba el<br/>chatbot aqui</p>
  )
}
