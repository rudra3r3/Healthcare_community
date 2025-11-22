const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// --- 1. Serve the Entire Project Folder ---
// This allows the browser to access /Frontpage, /Admin, /User, etc.
app.use(express.static(__dirname));

// --- 2. The Home Route ---
// When someone visits http://localhost:3000/, redirect them to your main page
app.get('/', (req, res) => {
    res.redirect('/Frontpage/frontpage.html');
});

// --- 3. The AI Chat Endpoint ---
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    
    // Format history for OpenRouter (User/Assistant)
    const formattedHistory = history.map(item => ({
      role: item.role === 'model' ? 'assistant' : 'user',
      content: item.parts[0].text
    }));

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        //model: 'nousresearch/hermes-3-llama-3.1-405b:free',
        //model: 'google/gemini-2.0-flash-lite-preview-02-05:free',
        // A very reliable, fast model that usually has free space
        model: 'mistralai/mistral-7b-instruct:free',
        messages: [
           { 
        role: "system", 
        content: `You are the AI Assistant for 'Smart Community Health' (SCH). 
        
        YOUR KNOWLEDGE BASE:
        1. PROJECT GOAL: We monitor water quality in real-time to prevent disease outbreaks.
        2. FEATURES: We use LoRa sensors for Turbidity/TDS and an App for ASHA workers.
        3. CONTACT: In emergencies, tell users to contact the District Health Officer.
        
        RULES:
        - Keep answers short (under 3 sentences).
        - If asked about medical advice, say: "I am an AI. Please visit a doctor."
        - Do NOT answer questions about coding, math, or movies. Stick to health/water.
        - Be empathetic and professional.` 
    },
    ...formattedHistory, 
    { role: 'user', content: message }
        ]
      })
    });

    if (!response.ok) throw new Error(`API Error: ${response.status}`);

    const data = await response.json();
   let botMessage = data.choices[0].message.content;

// --- CLEANUP: Remove the ugly <s> tags ---
botMessage = botMessage.replace(/<s>/g, "").replace(/<\/s>/g, "").trim();
    res.json({ message: botMessage });

} catch (error) {
    console.error('Error:', error);
    // Send a friendly error message to the frontend instead of crashing
    res.json({ 
        message: "I'm experiencing high traffic right now. Please ask me again in 10 seconds!" 
    });
  }
});

app.listen(port, () => {
  console.log(`Project running at http://localhost:${port}`);
});