'use server'

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAY_API_KEY,
});

export const generateChatResponse = async (chatMessages) => {

    try {
        const response = await openai.chat.completions.create({
            messages: [
              { role: 'system', content: 'you are a helpful assistant' },
              ...chatMessages,
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0,
            max_tokens: 100,
          });
          
          return response.choices[0].message;	
    }
        catch (error) {
            return null;
    }
    
      

    }

export const getExistingTour = async ({ city, country }) => {
  return prisma.tour.findUnique({
    where: {
      city_country: {
        city,
        country,
      },
    },
  });
};