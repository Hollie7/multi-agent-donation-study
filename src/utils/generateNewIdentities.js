// generateNewIdentities.js
async function generateNewIdentities(userData, prompt, selectedOccupations) {
  // 将 selectedOccupations 集合转换为逗号分隔的字符串列表
  const selectedOccupationsList = Array.from(selectedOccupations).join(", ");

  // 构造最终的用户 prompt
  const finalPrompt = `${prompt}. The occupation in the new identity cannot be the same as any of the following: ${selectedOccupationsList}`;

  // 构造 chat messages 数组
  const messages = [
    {
      role: "system",
      content: `Based on the user's data, generate new identities. Ensure the occupation is unique.`,
    },
    {
      role: "user",
      content: finalPrompt,
    },
    {
      role: "user",
      content: JSON.stringify(userData),
    },
  ];

  try {
    const response = await fetch(
      "https://user-study-eight.vercel.app/api/gpt",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages,
          temperature: 0.7,
          max_tokens: 500,
        }),
      }
    );

    if (!response.ok) {
      const text = await response.text(); // 打印返回内容，方便调试
      throw new Error(`OpenAI API error: ${response.status} - ${text}`);
    }

    const data = await response.json();

    if (data?.choices?.[0]?.message?.content) {
      const newIdentities = JSON.parse(data.choices[0].message.content);
      return newIdentities;
    } else {
      console.error("GPT response:", data);
      throw new Error("Invalid response from OpenAI API");
    }
  } catch (error) {
    console.error("Error generating new identities:", error);
    throw error;
  }
}

export default generateNewIdentities;
