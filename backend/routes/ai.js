const axios = require('axios');
const authenticate = require('../middleware/authenticate');

const GROQ_API_KEY = process.env.GROQ_API_KEY;

async function aiRoutes(fastify, options) {
  fastify.addHook('preHandler', authenticate);

  fastify.post('/suggest-tasks', {
    config: {
      rateLimit: {
        max: 3,
        timeWindow: '1 minute'
      }
    }
  }, async (req, reply) => {
    const { requirement, projectId } = req.body;

    if (!requirement) {
      return reply.code(400).send({ error: 'Requirement is required' });
    }

    try {
      const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: `You are an Agile Architect. Break down the user requirement into specific, actionable tasks. 
            Return ONLY a JSON array of objects. Each object must have:
            - title (string)
            - description (string)
            - priority (Low, Medium, High, Critical)
            - estimated_hours (number)
            - days_to_complete (number - how many days from now this should be finished)
            - recommended_role (e.g. Frontend Developer, Backend Developer, Designer, etc.)
            - subtasks (array of strings)
            
            Format: [{"title": "...", "description": "...", "priority": "...", "estimated_hours": 0, "days_to_complete": 3, "recommended_role": "...", "subtasks": ["subtask 1", "subtask 2"]}, ...]`
          },
          {
            role: 'user',
            content: `Project ID: ${projectId || 'General'}. Requirement: ${requirement}`
          }
        ],
        temperature: 0.1,
        response_format: { type: 'json_object' }
      }, {
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      const content = response.data.choices[0].messages?.content || response.data.choices[0].message.content;
      
      // Attempt to parse if it's a string, or just return if it's already an object
      let tasks;
      try {
          // If the AI returns a wrapped object like {"tasks": [...]}
          const parsed = JSON.parse(content);
          tasks = Array.isArray(parsed) ? parsed : (parsed.tasks || parsed.suggestions || []);
      } catch (e) {
          // Fallback regex to find JSON array if parsing fails
          const match = content.match(/\[.*\]/s);
          tasks = match ? JSON.parse(match[0]) : [];
      }

      return { tasks };
    } catch (err) {
      console.error('Groq AI Error:', err.response?.data || err.message);
      return reply.code(500).send({ error: 'AI suggestion failed' });
    }
  });
  fastify.post('/ask-helper', async (req, reply) => {
    const { question } = req.body;

    if (!question) {
      return reply.code(400).send({ error: 'Question is required' });
    }

    try {
      const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: `You are the Sprintora AI Guide. Your job is to help users navigate the Sprintora Agile Platform. 
            Sprintora has these modules:
            - Dashboard: Visual metrics and the AI Architect input.
            - Projects: Where you create and manage workspaces.
            - Tasks: A Kanban-style board for individual and team work.
            - Meetings: Real-time team collaboration tools.
            - Files: Secure cloud storage for project assets.
            - AI Architect: Located on the Dashboard, it turns requirements into tasks.
            
            Always be helpful, professional, and concise. If a user asks 'how to...' or 'where is...', give them direct navigation advice.
            Example: 'You can create a new task in the Tasks module by clicking the Add Task button at the top of any column.'`
          },
          {
            role: 'user',
            content: question
          }
        ],
        temperature: 0.7,
      }, {
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      const answer = response.data.choices[0].message.content;
      return { answer };
    } catch (err) {
      console.error('Groq AI Helper Error:', err.response?.data || err.message);
      return reply.code(500).send({ error: 'AI Guide is currently unavailable' });
    }
  });
}

module.exports = aiRoutes;
