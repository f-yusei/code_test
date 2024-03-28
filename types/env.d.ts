declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_RESAS_API_KEY: string;
    }
  }
}

export {};
