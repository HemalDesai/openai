export default async function handler(req, res) {
    const { prompt } = req.body;
  
    try {
      const response = await fetch('https://api.openai.com/v1/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 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',
        },
        body: JSON.stringify({
          prompt: prompt,
          // Add other OpenAI API parameters as needed
          // For example:
          // max_tokens: 50,
        }),
      });
  
      const data = await response.json();
      res.status(200).json({ imageUrl: data.output.url });
    } catch (error) {
      console.error('Error generating image:', error);
      res.status(500).json({ error: 'Failed to generate image' });
    }
  }

  //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
  