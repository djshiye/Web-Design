import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Grid, Box } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [messageSent, setMessageSent] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!name.trim()) {
      setErrors({ name: 'Name is required' });
    } else if (!validateEmail(email)) {
      setErrors({ email: 'Invalid email format' });
    } else if (!message.trim()) {
      setErrors({ message: 'Message is required' });
    } else {
      // Form is valid, handle submission
      console.log({ name, email, message });
      setMessageSent(true);
    }
  };

  // Email validation function using regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // UseEffect hook to check if the form is autofilled
  useEffect(() => {
    const handleAutofill = () => {
      const isAutofilled = document.querySelector(':autofill');
      if (isAutofilled) {
        const formData = new FormData(e.target);
        setName(formData.get('name') || '');
        setEmail(formData.get('email') || '');
        setMessage(formData.get('message') || '');
      }
    };
    document.addEventListener('animationstart', handleAutofill);
    return () => {
      document.removeEventListener('animationstart', handleAutofill);
    };
  }, []);

  return (
    <div style={{ background: "url('https://images.unsplash.com/photo-1600762516498-761775b86af7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Typography variant="h4" gutterBottom align="center" style={{ marginBottom: 20, color: 'white' }}>Contact Us</Typography>
        <form noValidate autoComplete="on" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
                InputProps={{ style: { color: 'white' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{ style: { color: 'white' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                name="message"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={!!errors.message}
                helperText={errors.message}
                InputProps={{ style: { color: 'white' } }}
              />
            </Grid>
            <Grid item xs={12}>
              {/* Conditional rendering of message sent confirmation */}
              {messageSent && (
                <Typography variant="body1" align="center" sx={{ color: 'green', marginTop: 1 }}>
                  Message sent successfully!
                </Typography>
              )}
              <Box display="flex" justifyContent="center">
                <Button type="submit" variant="contained" color="primary">Submit</Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
