// En un archivo global.d.ts en la raíz de tu proyecto o en tu carpeta de tipos
declare global {
    interface Window {
      voiceflow: {
        chat: {
          load: (config: { verify: { projectID: string }, url: string, versionID: string }) => void;
        }
      }
    }
  }
  
  export {};