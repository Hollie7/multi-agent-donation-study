import openai from "./openaiClient";

export async function getGPTMessage(prompt, userMessage) {
  try {
    const req = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: userMessage.toString() },
      ],
      temperature: 0.01,
      max_tokens: 200,
    };

    const response = await openai.chat.completions.create(req);
    const response_content = response.choices[0].message.content;
    return response_content;
  } catch (e) {
    console.log("Error in getGPTMessage:", e);
  } finally {
  }
}
