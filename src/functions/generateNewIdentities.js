import OpenAI from "openai";
import { useRef } from "react";
import openai from "../services/openaiClient.js";

async function generateNewIdentities(userData, prompt, selectedOccupations) {
  // 将 selectedOccupations 集合转换为逗号分隔的字符串列表
  const selectedOccupationsList = Array.from(selectedOccupations).join(", ");

  // 创建请求的 prompt，并确保 occupation 不与 selectedOccupations 中的重复
  const finalPrompt = `${prompt}. The occupation in the new identity cannot be the same as any of the following: ${selectedOccupationsList}`;

  // 创建请求
  const req = {
    model: "gpt-3.5-turbo", // 使用已知存在且有权限的模型名称
    messages: [
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
    ],
    temperature: 0.7,
    max_tokens: 500,
  };

  try {
    const response = await openai.chat.completions.create(req);
    console.log("Token usage:", response.usage);

    const responseContent = response.choices[0].message.content;
    const newIdentities = JSON.parse(responseContent);

    return newIdentities;
  } catch (error) {
    console.error("Error generating new identities:", error);
    throw error;
  }
}

export default generateNewIdentities;
