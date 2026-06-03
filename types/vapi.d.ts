declare global {
  interface Window {
    vapiSDK?: {
      run: (options: {
        apiKey: string;
        assistant: string;
        config?: {
          position?: string;
          theme?: {
            primary?: string;
            secondary?: string;
          };
        };
      }) => void;
    };
  }
}

export {};
