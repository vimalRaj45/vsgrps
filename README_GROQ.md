# 🛡️ Groq API & Cloudflare Pages Fix Guide

This project uses Groq API for the chatbot. If you are seeing "401 Unauthorized" or "API Key missing" errors in production, follow this guide.

## 1. Why the environment variable is not being injected
Vite is a **Static Site Generator**. It injects environment variables **at build time**, not runtime.
- When you run `npm run build`, Vite looks for `VITE_GROQ_API_KEY`.
- It replaces every instance of `import.meta.env.VITE_GROQ_API_KEY` with the actual string.
- **If the variable is missing during the build**, the final JavaScript file will contain `undefined`.

## 2. How to fix Cloudflare Pages setup
1. Go to **Cloudflare Pages Dashboard** > Your Project > **Settings** > **Environment variables**.
2. Add `VITE_GROQ_API_KEY` to **both** "Production" and "Preview".
3. **CRITICAL**: You MUST trigger a **new deployment** (retry the build) after adding the variable. Cloudflare does not automatically re-build existing deployments when you change variables.

## 3. Secure Architecture (Highly Recommended)
Exposing your Groq API key in the frontend allows anyone to steal it. The best way is to use a **Cloudflare Worker** as a proxy.

### Step 1: Create a Cloudflare Worker
Create a new Worker and use this code:

```javascript
export default {
  async fetch(request, env) {
    // Add CORS headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

    const url = "https://api.groq.com/openai/v1/chat/completions";
    const body = await request.json();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  },
};
```

### Step 2: Set the Secret in the Worker
In the Worker settings, add `GROQ_API_KEY` as a **Secret**.

### Step 3: Update `src/config/env.js`
Change the `apiUrl` to your Worker URL and remove the API key from the frontend.

```javascript
export const config = {
  groq: {
    apiKey: '', // No longer needed on frontend!
    apiUrl: 'https://your-worker-name.your-subdomain.workers.dev',
    model: 'llama-3.3-70b-versatile',
  },
};
```
