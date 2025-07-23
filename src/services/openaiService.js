// openaiService.js

const API_BASE = import.meta.env.VITE_API_BASE || "";

export async function getGPTMessage(prompt, userMessage) {
  try {
    const response = await fetch(`${API_BASE}/api/gpt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: prompt },
          { role: "user", content: userMessage.toString() },
        ],
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (e) {
    console.error("Error:", e);
    return "Something went wrong.";
  }
}
