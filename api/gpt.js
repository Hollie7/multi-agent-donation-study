// api/gpt.js
export default async function handler(req, res) {
  try {
    const { messages, model = "gpt-4" } = req.body;

    const openaiRes = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages,
          temperature: 0.7,
          max_tokens: 500,
        }),
      }
    );

    const data = await openaiRes.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("GPT API failed:", error);
    res.status(500).json({ error: "GPT API failed", details: error.message });
  }
}
