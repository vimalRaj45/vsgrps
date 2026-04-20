export async function onRequestPost(context) {
  const { request, env } = context;
  

  const API_KEY = env.VITE_GROQ_API_KEY;
  
  if (!API_KEY) {
    return new Response(JSON.stringify({ error: "API Key not configured in Cloudflare" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const body = await request.json();
    
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are the VSGRPS Intelligence Assistant, a professional consultant for Vision Solutions Groups. You specialize in software development, business automation, and premium digital solutions. Keep responses concise and highlight VSGRPS's expertise. Pricing: ₹3k-₹15k for websites, ₹5k-₹20k for automation, ₹50k+ for enterprise software."
          },
          { role: "user", content: body.message }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
