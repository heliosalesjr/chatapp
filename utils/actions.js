'use server'

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAY_API_KEY,
});

export const generateChatResponse = async (chatMessages) => {
    
      const response = await openai.chat.completions.create({
        messages: [
          { role: 'system', content: 'you are a helpful assistant' },
          { role: 'user', content: chatMessages },
        ],
        model: 'gpt-3.5-turbo',
        temperature: 0,
        max_tokens: 100,
      });
      console.log(response.choices[0].message);
      console.log(response);
      return 'wow';

    }