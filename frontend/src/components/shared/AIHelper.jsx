import React, { useState } from 'react';
import { 
  Box, IconButton, Paper, Typography, TextField, Stack, 
  CircularProgress, Fade, Zoom, Tooltip, useTheme, Fab 
} from '@mui/material';
import { 
  AutoAwesome as AutoAwesomeIcon, 
  Close as CloseIcon,
  Send as SendIcon,
  SmartToy as RobotIcon
} from '@mui/icons-material';
import client from '../../api/client';

const AIHelper = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');
    try {
      const res = await client.post('/ai/ask-helper', { question });
      setAnswer(res.data.answer);
    } catch (err) {
      setAnswer('Sorry, I am having trouble connecting to the AI brain right now. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <Box sx={{ position: 'fixed', bottom: { xs: 80, sm: 24 }, right: 24, zIndex: 1100 }}>
        <Zoom in={true}>
          <Tooltip title="Ask Sprintora AI Guide" placement="left">
            <Fab 
              color="primary" 
              onClick={() => setOpen(!open)}
              sx={{ 
                background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                boxShadow: '0 8px 32px rgba(99, 102, 241, 0.4)',
                '&:hover': { transform: 'scale(1.1)' }
              }}
            >
              {open ? <CloseIcon /> : <AutoAwesomeIcon />}
            </Fab>
          </Tooltip>
        </Zoom>
      </Box>

      {/* Helper Panel */}
      <Fade in={open}>
        <Paper
          elevation={24}
          sx={{
            position: 'fixed',
            bottom: { xs: 150, sm: 90 },
            right: 24,
            width: { xs: 'calc(100% - 48px)', sm: 380 },
            maxHeight: 500,
            zIndex: 1100,
            borderRadius: 3,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.95)' : '#ffffff',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          {/* Header */}
          <Box sx={{ p: 2.5, bgcolor: 'primary.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <RobotIcon />
              <Typography variant="subtitle1" fontWeight="900">Sprintora AI Guide</Typography>
            </Stack>
            <IconButton size="small" onClick={() => setOpen(false)} sx={{ color: 'white' }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Content */}
          <Box sx={{ p: 3, flexGrow: 1, overflowY: 'auto', minHeight: 150 }}>
            {!answer && !loading && (
              <Box sx={{ textAlign: 'center', py: 4, opacity: 0.7 }}>
                <AutoAwesomeIcon sx={{ fontSize: 40, mb: 1, color: 'primary.main' }} />
                <Typography variant="body2">
                  "Where do I manage my projects?"<br />
                  "How do I use the AI Architect?"
                </Typography>
              </Box>
            )}

            {loading && (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                <CircularProgress size={24} />
              </Box>
            )}

            {answer && (
              <Typography variant="body2" sx={{ lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                {answer}
              </Typography>
            )}
          </Box>

          {/* Footer Input */}
          <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
            <Stack direction="row" spacing={1}>
              <TextField
                fullWidth
                size="small"
                placeholder="Ask me anything..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
              <IconButton color="primary" onClick={handleAsk} disabled={loading || !question.trim()}>
                <SendIcon />
              </IconButton>
            </Stack>
          </Box>
        </Paper>
      </Fade>
    </>
  );
};

export default AIHelper;
