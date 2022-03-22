import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';

export default function AuthDialog(props) {
  return (
    <Box sx={{ p: 1 }}>
      <DialogContent>
        <TextField margin="dense" variant="standard" fullWidth label="Username" type="text" autoFocus />
        <TextField margin="dense" variant="standard" fullWidth label="Email" type="email" />
        <TextField margin="dense" variant="standard" fullWidth label="Password" type="password" />
        <TextField margin="dense" variant="standard" fullWidth label="Confirm Password" type="password" />
      </DialogContent>

      <DialogActions>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button onClick={props.onClose}>Register</Button>
      </DialogActions>
    </Box>
  );
}