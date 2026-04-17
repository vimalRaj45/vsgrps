/**
 * Environment Configuration
 * Centralizes all environment variables with validation and fallbacks.
 */

const getEnv = (key, fallback = '') => {
  const value = import.meta.env[key];
  
  if (!value && import.meta.env.PROD) {
    console.warn(`[Config] Environment variable ${key} is missing in production.`);
  }
  
  return value || fallback;
};

export const config = {
  groq: {
    apiKey: getEnv('VITE_GROQ_API_KEY'),
    apiUrl: 'https://api.groq.com/openai/v1/chat/completions',
    model: 'llama-3.3-70b-versatile',
  },
  isProd: import.meta.env.PROD,
  isDev: import.meta.env.DEV,
};

export const validateConfig = () => {
  const missing = [];
  if (!config.groq.apiKey) missing.push('VITE_GROQ_API_KEY');
  
  if (missing.length > 0 && config.isProd) {
    console.error(
      `CRITICAL: Missing environment variables: ${missing.join(', ')}. ` +
      `Please add them to your Cloudflare Pages dashboard under Settings > Environment variables (BUILD environment).`
    );
  }
  
  return missing.length === 0;
};
